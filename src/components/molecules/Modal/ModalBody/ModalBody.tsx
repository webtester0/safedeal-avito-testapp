import React from 'react';
import { Body, Content } from './style';
import { MergedNativeProps } from '@common/interface';

interface ModalBodyOwnProps {

}

type ModalBodyProps = MergedNativeProps<HTMLDivElement, ModalBodyOwnProps>;

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => {
    return (
        <Body className={className}>
            <Content>{children}</Content>
        </Body>
    );
};
