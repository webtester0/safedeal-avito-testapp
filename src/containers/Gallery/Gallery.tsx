import React, {useEffect} from 'react';
import { connect } from "react-redux";
//TODO: alias store
import { setPhotos } from '@store/actions/photos';
import { Loader } from '@components/Loader';
import { Wrapper, LoaderWrapper } from './style';
import { Item } from '@components/Item';

interface GalleryProps {
    photos?: { id: number; url: string }[];
    isReady?: boolean;
    setPhotosAction?: Function;
}

const Gallery: React.FC<GalleryProps> = ({ photos, setPhotosAction, isReady }) => {
    useEffect(() => {
        setPhotosAction();
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

const mapStateToProps = ({ photos, isReady }) => ({ photos, isReady });
const mapDispathcToProps = dispatch => ({
    setPhotosAction: () => dispatch(setPhotos())
});


export default connect(mapStateToProps, mapDispathcToProps)(Gallery);