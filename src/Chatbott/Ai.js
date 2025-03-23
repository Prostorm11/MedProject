import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export const sendMessageToGroq = async (message) => {
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: message }],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Groq API error:", error);
    return "Error: Unable to get a response";
  }
};

