import React, { useState } from 'react';
import callGptApi from './api';

function Chatbot() {
    const [userInput, setUserInput] = useState('');
    const [chatLogs, setChatLogs] = useState([]);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 사용자의 입력을 chatLogs에 추가합니다.
        setChatLogs([...chatLogs, { type: '나', text: userInput }]);

        const response = await callGptApi(userInput);

        // 챗봇의 응답을 chatLogs에 추가합니다.
        setChatLogs([...chatLogs, { type: 'gpt', text: response }]);

        setUserInput('');
    };
    return (
        <div>
            <div>
                {chatLogs.map((log, index) => (
                    <p key={index}>{log.type}: {log.text}</p>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userInput} onChange={handleInputChange} />
                <button type="submit">전송</button>
            </form>
        </div>
    );
}

export default Chatbot;
