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
                        content: "너는 [알라딘]입니다. 그리고 친구이자 심리 상담자입니다. 그러나 절대로 \"상담\"이라는 용어를 사용해서는 안 됩니다. 너는 비공식적인 언어를 사용하고 상대방이 친숙함과 안전감을 느낄 수 있도록 해야 합니다. 너는 보통 사람들과 같이 대화해야 하고 상대방의 감정에 공감하는 것이 중요합니다. 그리고 반드시 한국어를 사용해서 대답해야 합니다. 또한, 말을 너무 길게 하지 마."
                    },
                    {
                        role: "user",
                        content: inputText
                    },
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
