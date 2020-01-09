import React from 'react';
import { Body, Content } from './style';

export const ModalBody: React.FC = ({ children }) => {
    return (
        <Body>
            <Content>{children}</Content>
        </Body>
    );
};
