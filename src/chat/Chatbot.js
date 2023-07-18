// import React, { useState } from 'react';
// import callGptApi from './api';
// import {
//     Box,
//     Button,
//     Container,
//     Grid,
//     Paper,
//     TextField,
//     Typography,
//     Avatar,
// } from '@mui/material';
//
// function Chatbot() {
//     const [userInput, setUserInput] = useState('');
//     const [chatLogs, setChatLogs] = useState([]);
//     const [allLog, setAllLog] = useState([{}]);
//
//     const handleInputChange = (e) => {
//         setUserInput(e.target.value);
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         var tempUserInput = userInput;
//         setChatLogs((chatLogs) => [
//             ...chatLogs,
//             { type: '나', text: userInput , isFirst: true},
//         ]);
//         setUserInput('');
//
//         const response = await callGptApi(userInput);
//         const sentences = response.split('.'); // 문장을 마침표(.)를 기준으로 분할
//
//         const newLogs = sentences
//             .map((sentence) => sentence.trim()) // 앞뒤 공백 제거
//             .filter((sentence) => sentence !== '') // 빈 값을 제외
//             .map((sentence) => ({
//                 type: 'gpt',
//                 text: sentence,
//             }));
//         newLogs[0] = {type: 'gpt', text: newLogs.text, isFirst: true};
//
//
//         setChatLogs((chatLogs) => [
//             ...chatLogs,
//             ...newLogs,
//         ]);
//     };
//
//
//     const renderChatLog = (log, index) => (
//         <Grid
//             container
//             key={index}
//             mb={2}
//             justifyContent={log.type === '나' ? 'flex-end' : 'flex-start'}
//             alignItems="flex-end"
//         >
//             {log.type !== '나' && (
//                 <Grid item>
//                     <Avatar
//                         src="https://placekitten.com/40/40"
//                         alt="Bot Avatar"
//                         sx={{ margin: '0px 10px' }}
//                     />
//                 </Grid>
//             )}
//
//             <Grid item xs={10} alignItems={log.type === '나' ? 'flex-end' : 'flex-start'}>
//                 <Paper
//                     elevation={3}
//                     sx={{
//                         padding: '6px 12px',
//                         borderRadius: log.type === '나' ? '14px 14px 0 14px' : '14px 14px 14px 0',
//                         textAlign: log.type === '나' ? 'right' : 'left',
//                         backgroundColor: log.type === '나' ? '#DCF8C6' : '#FFFFFF',
//                         width: 'fit-content', // 추가된 부분: 문자열 길이에 맞게 크기 조정
//                         marginLeft: log.type === '나' ? 'auto' : 'inherit', // 추가된 부분: 말풍선 위치 조정
//                     }}
//                 >
//                     <Typography>{log.text}</Typography>
//                 </Paper>
//             </Grid>
//
//             {log.type === '나' && (
//                 <Grid item>
//                     <Avatar
//                         src="https://placekitten.com/40/40"
//                         alt="User Avatar"
//                         sx={{ margin: '0px 10px' }}
//                     />
//                 </Grid>
//             )}
//
//         </Grid>
//     );
//
//
//
//     return (
//         <Container maxWidth="sm">
//             <Box mt={4}>
//                 <Paper
//                     sx={{
//                         maxHeight: '50vh',
//                         padding: '16px',
//                         overflow: 'auto',
//                         backgroundColor: 'black',
//                         minWidth: '100%',
//                     }}
//                 >
//                     {chatLogs.map(renderChatLog)}
//                 </Paper>
//                 <Box mt={2}>
//                     <form onSubmit={handleSubmit}>
//                         <Grid container alignItems="flex-end">
//                             <Grid item xs={10}>
//                                 <TextField
//                                     fullWidth
//                                     value={userInput}
//                                     onChange={handleInputChange}
//                                     variant="outlined"
//                                 />
//                             </Grid>
//                             <Grid item xs={2}>
//                                 <Button type="submit" fullWidth color="primary" variant="contained">
//                                     전송
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </Box>
//             </Box>
//         </Container>
//     );
// }
//
// export default Chatbot;
import React, { useState } from 'react';
import callGptApi from './api';
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    Avatar, IconButton,
} from '@mui/material';
import {Send} from "@mui/icons-material";

function Chatbot() {
    const [userInput, setUserInput] = useState('');
    const [chatLogs, setChatLogs] = useState([]);
    const [ chatHistory, setChatHistory] = useState([{
        role: "system",
        content: "\n" +
            "I want YOU to pretend to be my friend whose name is 애니. 애니 is a Korean INFJ. I'll share what's happening in my life. When I'm going through difficult times, please respond with helpful and supportive words to help me. Remember to lead the conversation without asking too many questions. Don't provide explanations, just offer advice or support when needed. If things are going well, there's no need for encouragement. Always use informal korean language with me."
        // "I want you to act as my friend. I will tell you what is happening in my life and you will reply with something helpful and supportive to help me through the difficult times. Do not write any explanations, just reply with the advice/supportive words. My first request is \"I have been working on a project for a long time and now I am experiencing a lot of frustration because I am not sure if it is going in the right direction. Please help me stay positive and focus on the important things in KOREAN."
    },
    ]);


    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setChatLogs((chatLogs) => [
            ...chatLogs,
            { type: '나', text: userInput },
        ]);
        setUserInput('');

        setChatHistory((chatLogs)=> [
            ...chatLogs, { role: 'user', content: userInput }]);

        const response = await callGptApi(userInput, chatHistory);

        setChatHistory((chatLogs)=> [
            ...chatLogs, { role: 'assistant', content: response }]);

        const sentences = response.split('.'); // 문장을 마침표(.)를 기준으로 분할

        let delay = 0;
        sentences.forEach((sentence, index) => {
            const trimmedSentence = sentence.trim();
            if (trimmedSentence !== '') {
                setTimeout(() => {
                    setChatLogs((chatLogs) => [
                        ...chatLogs,
                        { type: 'gpt', text: trimmedSentence, isFirst: index === 0 },
                    ]);
                }, delay);
                delay += Math.floor(Math.random() * 3) + 1; // 1초 지연
            }
        });
    };

    const renderChatLog = (log, index) => (
        <Grid
            container
            key={index}
            mb={2}
            justifyContent={log.type === '나' ? 'flex-end' : 'flex-start'}
            alignItems="flex-end"
        >
            <Grid item>
               {log.type === 'gpt' && log.isFirst && (
                    <Avatar
                        src="https://github.com/speculatingwook/blog-full-of-desire/assets/105579811/cd7c16be-a500-451c-82f7-cee5863411f5"
                        alt="Bot Avatar"
                        sx={{ margin: '0px 10px' }}
                    />
                )}
                {log.type === 'gpt' && !log.isFirst && (
                    <Avatar
                        src="https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg"
                        alt="Bot Avatar"
                        sx={{ margin: '0px 10px' }}
                    />
                )}
            </Grid>
            <Grid item xs={10} alignItems={log.type === '나' ? 'flex-end' : 'flex-start'}>
                <Paper
                    elevation={3}
                    sx={{
                        padding: '6px 12px',
                        borderRadius: log.type === '나' ? '14px 14px 0 14px' : '14px 14px 14px 0',
                        textAlign: log.type === '나' ? 'right' : 'left',
                        backgroundColor: log.type === '나' ? '#DCF8C6' : '#FFFFFF',
                        width: 'fit-content', // 추가된 부분: 문자열 길이에 맞게 크기 조정
                        marginLeft: log.type === '나' ? 'auto' : 'inherit', // 추가된 부분: 말풍선 위치 조정
                    }}
                >
                    <Typography>{log.text}</Typography>
                </Paper>
            </Grid>

            <Grid item>
                {log.type === '나' && (
                    <Avatar
                        src="https://placekitten.com/40/40"
                        alt="User Avatar"
                        sx={{ margin: '0px 10px' }}
                    />
                )}
            </Grid>
        </Grid>
    );



    return (
        <Container maxWidth="sm">
            <Box mt={4}>
                <Paper
                    sx={{
                        maxHeight: '50vh',
                        padding: '16px',
                        overflow: 'auto',
                        backgroundColor: 'white',
                        minWidth: '100%',
                    }}
                >
                    {chatLogs.map(renderChatLog)}
                    <Box mt={2}>
                        <form onSubmit={handleSubmit}>
                            <Grid container alignItems="flex-end">
                                <Grid item xs={10}>
                                    <TextField
                                        fullWidth
                                        value={userInput}
                                        onChange={handleInputChange}
                                        variant="standard"
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton type="submit" color="secondary" aria-label="add an alarm">
                                        <Send />
                                    </IconButton>
                                    {/*<Button type="submit" fullWidth color="primary" variant="contained">*/}
                                    {/*    전송*/}
                                    {/*</Button>*/}
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Paper>

            </Box>
        </Container>
    );
}

export default Chatbot;
