import React, {useEffect, useRef, useState} from 'react';
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
    const [chatLogs, setChatLogs] = useState([
        {
            type: 'gpt',
            text: 'AnyTime에 온 걸 환영해 먼저 내 소개를 할게! 나는 AI봇 ‘애니’라고 해. ',
            isFirst: true
        },
        {
            type: 'gpt',
            text: '언제든지 편할 때 내게 말을 걸어줘.',
        }
    ]);

    const chatLogsRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom of the chatbox whenever chatLogs change
        chatLogsRef.current.scrollTop = chatLogsRef.current.scrollHeight;
    }, [chatLogs]);

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
            mb={1}
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
            <Grid item xs={9} alignItems={log.type === '나' ? 'flex-end' : 'flex-start'}>
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
        <Container maxWidth="sm" boxshadow="none">
            <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', }}>
                <Paper
                    ref={chatLogsRef}
                    sx={{
                        height: '480px',
                        width: '315px',
                        padding: '0',
                        overflowY: 'auto', // Make the chatbox scrollable if content overflows
                        backgroundColor: 'white',
                        boxShadow:0
                    }}
                >
                    {chatLogs.map(renderChatLog)}
                </Paper>
                <Box mt={1} sx={{ flexGrow: 1 }}>
                    <form onSubmit={handleSubmit} sx={{ height: '100%' }}>
                        <Grid container>
                            <Grid item xs={10.7}>
                                <TextField
                                    fullWidth
                                    value={userInput}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                >
                                </TextField>
                            </Grid>
                            <Grid item xs={1.3}  sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <IconButton type="submit" color="secondary" aria-label="add an alarm">
                                    <Send />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Container>
    );
}

export default Chatbot;
