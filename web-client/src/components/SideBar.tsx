import { Box, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

function SideBar() {
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
            height: "97vh",
            width: "3vw",
            backgroundColor: "#392830", 
            display: "flex",
            justifyContent: "center", 
            alignItems: "center", 
        }}>
            
        </Box>
    );
}

export default SideBar;
