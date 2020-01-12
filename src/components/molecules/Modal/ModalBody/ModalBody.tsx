import React from 'react';
import { Body, Content } from './style';
import { MergeNativeProps } from '@common/interface';

type ModalBodyProps = MergeNativeProps<HTMLDivElement>;

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => {
    return (
        <Body className={className}>
            <Content>{children}</Content>
        </Body>
    );
};
