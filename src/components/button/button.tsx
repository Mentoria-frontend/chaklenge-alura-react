import React from 'react';

export interface ButtonProps {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
    return (
        <>
            <button onClick={onClick}>{label}</button>
        </>
    );
};

export default Button;