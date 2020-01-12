import React from 'react';
import { InputBlock } from './style';
import { MergeNativeProps } from '@common/interface';

interface InputOwnProps {
    placeholder?: string;

    visible?: boolean;
}

type InputProps = MergeNativeProps<HTMLDivElement, InputOwnProps>;

export const Input: React.FC<InputProps> = ({ placeholder, visible = true, className }) => {
    return (
        <>
            <InputBlock placeholder={placeholder} visible={visible} className={className} />
        </>
    );
};
