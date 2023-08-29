import { Client } from '@notionhq/client'

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

export const getNotionData = async () => {
    const databaseId = process.env.NOTION_DATABASE_ID
    const response = await notion.databases.query({
        database_id: databaseId,
        // Filter out posts not checked to publish.
        filter: {
            and: [
                {
                    property: 'Published',
                    checkbox: {
                        equals: true,
                    },
                },
            ],
        },
        // Sort posts in descending order based on the Date column.
        sorts: [
            {
                property: 'Date',
                direction: 'descending',
            },
        ],
    })
    return response.results
}

export const getPage = async (pageId) => {
    const response = await notion.pages.retrieve({ page_id: pageId })
    return response
}

export const getBlocks = async (blockId) => {
    const blocks = []
    let cursor
    while (true) {
        const { results, next_cursor } = await notion.blocks.children.list({
            start_cursor: cursor,
            block_id: blockId,
        })
        blocks.push(...results)
        if (!next_cursor) {
            break
        }
        cursor = next_cursor
    }
    return blocks
}

export const getData = async (slug) => {
    const database = await getNotionData(process.env.NOTION_DATABASE_ID);
    const filter = database.filter(
        (blog) => blog.properties.Slug.rich_text[0].plain_text === slug
    );
    const page = await getPage(filter[0].id);
    const blocks = await getBlocks(filter[0].id);

    const childrenBlocks = await Promise.all(
        blocks
            .filter((block) => block.has_children)
            .map(async (block) => {
                return {
                    id: block.id,
                    children: await getBlocks(block.id),
                };
            })
    );

    const blocksWithChildren = blocks.map((block) => {
        if (block.has_children) {
            block[block.type].children = childrenBlocks.find(
                (x) => x.id === block.id
            ).children;
        }
        return block;
    });

    return {
        page,
        blocks: blocksWithChildren,
    };
};
