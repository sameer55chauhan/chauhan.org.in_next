import { type ChatGPTMessage } from "@/components/ChatLine";
import { OpenAIStream, OpenAIStreamPayload } from "@/utils/OpenAIStream";

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing Environment Variable OPENAI_API_KEY");
}

export const runtime = "edge";

export async function POST (req: Request): Promise<Response> {
  const body = await req.json();

  const messages: ChatGPTMessage[] = [
    {
      role: "system",
      content: `Assume that you are Prithvi Raj Chauhan 3, and answer the user questions assuming the same.`,
      prithvi: "",
      you: ""
    },
  ];
  messages.push(...body?.messages);

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  };
  

  const stream = await OpenAIStream(payload);
  return new Response(stream);
};
