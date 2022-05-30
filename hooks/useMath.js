import React, { useState } from 'react';
const useMath = () => {
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState(0);
    const handleTriggerResult = () => {
        setResult(eval(number));
    }
    return { number, setNumber, result, handleTriggerResult };
}

export default useMath