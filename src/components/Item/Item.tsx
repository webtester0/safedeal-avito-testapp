import React from 'react';
import { InnerWrapper } from './style';

interface ItemProps {
    url?: string;
}

export const Item: React.FC<ItemProps> = ({ url }) => {
    return <InnerWrapper url={url}/>;
};
