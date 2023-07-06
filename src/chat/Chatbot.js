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
//
//         setChatLogs((chatlogs) =>[...chatLogs, { type: '나', text: userInput }]);
//         setUserInput('');
//         const response = await callGptApi(userInput);
//
//         setChatLogs((chatlogs )=>[...chatLogs, { type: '나', text: tempUserInput }, { type: 'gpt', text: response }]);
//
//
//     };
//
//     const renderChatLog = (log, index) => (
//         <Grid
//             container
//             key={index}
//             mb={2}
//             justifyContent={log.type === '나' ? 'flex-end' : 'flex-start'}
//         >
//             <Grid item>
//                 <Paper
//                     elevation={3}
//                     sx={{
//                         padding: '6px 12px',
//                         ...(log.type === '나'
//                             ? { borderRadius: '14px 0px 14px 14px' }
//                             : { borderRadius: '0px 14px 14px 14px',textAlign: 'left' }),
//                     }}
//                 >
//                     <Typography>{log.text}</Typography>
//                 </Paper>
//             </Grid>
//         </Grid>
//     );
//
//     return (
//         <Container maxWidth="sm">
//             <Box mt={4}>
//                 <Box
//                     component={Paper}
//                     sx={{
//                         maxHeight: '50vh',
//                         padding: '16px',
//                         overflow: 'auto',
//                         backgroundColor: 'black',
//                     }}
//                 >
//                     {chatLogs.map(renderChatLog)}
//                 </Box>
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
    const [allLog, setAllLog] = useState([{}]);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        var tempUserInput = userInput;

        setChatLogs((chatlogs) => [
            ...chatLogs,
            { type: '나', text: userInput },
        ]);
        setUserInput('');
        const response = await callGptApi(userInput);

        setChatLogs((chatlogs) => [
            ...chatLogs,
            { type: '나', text: tempUserInput },
            { type: 'gpt', text: response },
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
            {log.type !== '나' && (
                <Grid item>
                    <Avatar
                        src="https://placekitten.com/40/40"
                        alt="Bot Avatar"
                        sx={{ margin: '0px 10px' }}
                    />
                </Grid>
            )}
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
            {log.type === '나' && (
                <Grid item>
                    <Avatar
                        src="https://placekitten.com/40/40"
                        alt="User Avatar"
                        sx={{ margin: '0px 10px' }}
                    />
                </Grid>
            )}
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