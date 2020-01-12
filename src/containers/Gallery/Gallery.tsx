import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//TODO: alias store
import { setPhotos } from '@store/actions/photos';
import { Loader } from '@molecules/Loader';
import { Wrapper, LoaderWrapper } from './style';
import { Item } from '@containers/Item';

interface GalleryProps {
    photos?: { id: number; url: string }[];

    isReady?: boolean;
    
    setPhotosAction?: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ photos, setPhotosAction, isReady }) => {
    //TODO
    useEffect(() => {
        setPhotosAction();
    }, []);
    return isReady ? (
        <Wrapper>
            {photos.map(item => (
                <Item key={item.id} url={item.url} id={item.id}></Item>
            ))}
        </Wrapper>
    ) : (
        <LoaderWrapper>
            <Loader></Loader>
        </LoaderWrapper>
    );
};

const mapStateToProps = ({ photos }) => ({
    //TODO
    photos: photos.photos,
    isReady: photos.isReady
 });
const mapDispathcToProps = dispatch => ({
    setPhotosAction: () => dispatch(setPhotos())
});

export default connect(mapStateToProps, mapDispathcToProps)(Gallery);
