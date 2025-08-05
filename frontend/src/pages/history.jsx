import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch (error) {
                console.error("Failed to fetch history:", error);
            }
        };
        fetchHistory();
    }, [getHistoryOfUser]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div>
            <IconButton onClick={() => routeTo("/home")}>
                <HomeIcon />
            </IconButton>
            {meetings.length ? (
                meetings.map((e, i) => (
                    <Card key={i} variant="outlined">
                        <CardContent>
                            <p style={{ fontSize: 14, color: 'text.secondary' }}>
                                Code: {e.meetingCode}
                            </p>
                            <p style={{ marginBottom: 1.5, color: 'text.secondary' }}>
                                Date: {formatDate(e.date)}
                            </p>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <p>No meetings found</p>
            )}
        </div>
    );
}