import { Alert, AlertTitle } from '@mui/material';
import React from 'react';

const Alertshow = ({
    severity,
    title,
    description,
}) => {
    return (
        <Alert 
            severity={severity}
            sx={{ width: '100%' }}

        >
            <AlertTitle>{title}</AlertTitle>
           {description}
            
        </Alert>
    )
};

export default Alertshow;