import React from 'react';
import { Wrapper, DateBlock, Content } from './style';

interface CommentProps {
    date?: number;

    comment?: string;
}

export const Comment: React.FC<CommentProps> = ({ date, comment }) => {
    const parseDate: Date = new Date(date);
    return (
        <Wrapper>
            <DateBlock>{`${parseDate.getDate()}.${parseDate.getMonth() +
                1}.${parseDate.getFullYear()}`}</DateBlock>
            <Content>{comment}</Content>
        </Wrapper>
    );
};
