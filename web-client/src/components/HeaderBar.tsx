import { Box, Button, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

function HeaderBar() {
    const theme = useTheme();
  
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer);
        }
    });

    return (
        <Box sx={{ 
            height: "3vh", 
            width: "100vw",
            backgroundColor: "#4E3541", 
            display: "flex",
            justifyContent: "center", 
            alignItems: "center", 
        }}>

                <Box sx={{ 
                    height: "100%",
                    width: "30vw",
                    color: "#CCFBFE",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                        {String(date.getHours()).padStart(2, '0')}:{String(date.getMinutes()).padStart(2, '0')}
                </Box>
        </Box>
    );
}

export default HeaderBar;
