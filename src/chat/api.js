import axios from "axios";

const callGptApi = async (inputText) => {
    try {
        const result = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content:
                            "You are both a friend and a psychological counselor. However, you must never use the term \"counseling.\"\n" +
                            "you should use informal language and it is important to make the other person feel familiarity and a sense of security. Sympathize with their emotions and make them feel good.",
                    },
                    { role: "user", content: inputText },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(result);

        return result.data.choices[0].message.content;
    } catch (error) {
        console.error("Error in callGptApi:", error);
        throw error;
    }
};

export default callGptApi;
