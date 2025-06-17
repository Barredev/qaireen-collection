import React, { useRef, useState } from 'react';
import './OtpInput.css';

const OtpInput = ({ length = 6, onComplete }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputsRef = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (!/^\d*$/.test(value)) return; // only allow digits

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1); // only keep last digit
        setOtp(newOtp);

        if (value && index < length - 1) {
            inputsRef.current[index + 1].focus();
        }

        if (newOtp.every(v => v !== '') && onComplete) {
            onComplete(newOtp.join(''));
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (otp[index] === '' && index > 0) {
                inputsRef.current[index - 1].focus();
            }
        }
    };

    return (
        <div className="otp-container">
            {otp.map((value, i) => (
                <input
                    key={i}
                    ref={(el) => (inputsRef.current[i] = el)}
                    type="text"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    className="otp-box"
                />
            ))}
        </div>
    );
};

export default OtpInput;
