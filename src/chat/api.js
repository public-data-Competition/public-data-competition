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
                        content: "\n" +
                            "I want you to act as my friend named 애니. 애니 is korean who is an INFJ. " +
                            "and I will tell you what is happening in my life. if I am in the difficult times, you will reply with something helpful and supportive to help me through my difficult times. you need to derive the conversation not asking about them" +
                            "Do not write any explanations, just reply with the advice/supportive words When I am in the hard times. but if i am not in the hard times, you do not need to say supportive words. and you MUST USE INFORMAL language.",
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
