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

        setChatLogs((chatlogs) =>[...chatLogs, { type: '나', text: userInput }]);

        const response = await callGptApi(userInput);

        setChatLogs((chatlogs )=>[...chatLogs, { type: '나', text: userInput }, { type: 'gpt', text: response }]);

        setUserInput('');
    };

    const renderChatLog = (log, index) => (
        <Grid
            container
            key={index}
            mb={2}
            justifyContent={log.type === '나' ? 'flex-end' : 'flex-start'}
        >
            <Grid item>
                <Paper
                    elevation={3}
                    sx={{
                        padding: '6px 12px',
                        ...(log.type === '나'
                            ? { borderRadius: '14px 0px 14px 14px' }
                            : { borderRadius: '0px 14px 14px 14px',textAlign: 'left' }),
                    }}
                >
                    <Typography>{log.text}</Typography>
                </Paper>
            </Grid>
        </Grid>
    );

    return (
        <Container maxWidth="sm">
            <Box mt={4}>
                <Box
                    component={Paper}
                    sx={{
                        maxHeight: '50vh',
                        padding: '16px',
                        overflow: 'auto',
                        backgroundColor: 'black',
                    }}
                >
                    {chatLogs.map(renderChatLog)}
                </Box>
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
