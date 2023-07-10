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
    Avatar,
} from '@mui/material';

function Chatbot() {
    const [userInput, setUserInput] = useState('');
    const [chatLogs, setChatLogs] = useState([]);

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

        const response = await callGptApi(userInput);
        const sentences = response.split('.'); // 문장을 마침표(.)를 기준으로 분할

        const newLogs = sentences
            .map((sentence) => sentence.trim()) // 앞뒤 공백 제거
            .filter((sentence) => sentence !== '') // 빈 값을 제외
            .map((sentence, index) => ({
                type: 'gpt',
                text: sentence,
                isFirst: index === 0,
            }));

        console.log(newLogs);
        setChatLogs((chatLogs) => [
            ...chatLogs,
            ...newLogs,
        ]);
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
                        src="http://www.irobotnews.com/news/photo/201803/13262_31414_3740.png"
                        alt="Bot Avatar"
                        sx={{ margin: '0px 10px' }}
                    />
                )}
                {log.type === 'gpt' && !log.isFirst && (
                    <Avatar
                        src="https://r1.community.samsung.com/t5/image/serverpage/image-id/2164661i597D7D7C5F04F096/image-size/large?v=v2&px=999"
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
                        backgroundColor: 'black',
                        minWidth: '100%',
                    }}
                >
                    {chatLogs.map(renderChatLog)}
                </Paper>
                <Box mt={2}>
                    <form onSubmit={handleSubmit}>
                        <Grid container alignItems="flex-end">
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    value={userInput}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button type="submit" fullWidth color="primary" variant="contained">
                                    전송
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Container>
    );
}

export default Chatbot;
