import React from 'react';
import { InputText, InputSub } from './style';
import { MergeNativeProps } from '@common/interface';

interface InputOwnProps {
    placeholder?: string;

    visible?: boolean;

    value?: string;

    required?: boolean;

    type?: string;

    bgc?: string;

    onChange?: () => void;
}

type InputProps = MergeNativeProps<HTMLDivElement, InputOwnProps>;

export const Input: React.FC<InputProps> = ({
    placeholder,
    visible = true,
    className,
    value,
    required = true,
    type = 'text',
    bgc = '#4997D0',
    onChange
}) => {
    return (
        <>
            {type === 'text' ? (
                <InputText
                    placeholder={placeholder}
                    visible={visible}
                    className={className}
                    type={type}
                    value={value}
                    required={required}
                    onChange={onChange}
                />
            ) : type === 'submit' ? (
                <InputSub value={value} type={type} bgc={bgc} />
            ) : null}
        </>
    );
};
