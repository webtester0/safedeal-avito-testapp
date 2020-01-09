import React, { useEffect } from 'react';
import { Loader } from '@components/Loader';
import { Wrapper, LoaderWrapper } from './style';
import { Item } from '../Item';

interface GalleryProps {
    photos?: { id: number; url: string }[];
    isReady?: boolean;
    setPhotos?: Function;
}

export const Gallery: React.FC<GalleryProps> = ({ photos, setPhotos, isReady }) => {
    useEffect(() => {
        setPhotos();
    }, []);
    return isReady ? (
        <Wrapper>
            {photos.map(item => (
                <Item key={item.id} url={item.url}></Item>
            ))}
        </Wrapper>
    ) : (
        <LoaderWrapper>
            <Loader></Loader>
        </LoaderWrapper>
    );
};
