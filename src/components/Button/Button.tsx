import React from 'react';
import { BaseButton } from './style';

interface ButtonProps {
    // background color
    bgc?: string;
}

export const Button: React.FC<ButtonProps> = ({ bgc, children }) => {
    return (
        <>
            <BaseButton bgc={bgc}>{children}</BaseButton>
        </>
    );
};
