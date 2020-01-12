import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import {
    InnerWrapper,
    IconBtn,
    Header,
    Content,
    LeftPart,
    RightPart,
    Block,
    LoaderWrapper
} from './style';
import { Modal } from '@molecules/Modal';
import { ModalBody } from '@molecules/Modal/ModalBody';
import { setModalPhoto } from '@store/actions/item';
import { Form } from '@organisms/Form';
import { Comment } from '@molecules/Comment';
import { Loader } from '@molecules/Loader';

interface ItemProps {
    url?: string;

    id?: number;

    setModalPhotoAction?: (id: number) => void;

    comments?: {
        id: number;
        text: string;
        date: number;
    }[];

    photo?: string;

    isReady?: boolean;
}

const Item: React.FC<ItemProps> = ({ url, id, setModalPhotoAction, comments, photo, isReady }) => {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(true);
        setModalPhotoAction(id);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <InnerWrapper url={url} onClick={handleOpen} />
            <Modal isOpen={isOpen} onEscape={handleClose} onClickAway={handleClose}>
                <ModalBody>
                    {isReady ? (
                        <>
                            <Header>
                                <IconBtn onClick={handleClose}>
                                    <svg
                                        width="16"
                                        height="16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.585 8L.93 13.655l1.414 1.414L8 9.414l5.658 5.657 1.414-1.414-5.657-5.658 5.657-5.657L13.657.928 7.999 6.585 2.343.93.93 2.343 6.585 8z"
                                            fill="#2D2F33"
                                        />
                                    </svg>
                                </IconBtn>
                            </Header>
                            <Content>
                                <LeftPart>
                                    <Block url={photo}></Block>
                                    <Form id={id} />
                                </LeftPart>
                                <RightPart>
                                    {comments &&
                                        comments.map(({ id, text, date }) => (
                                            <Comment key={id} comment={text} date={date} />
                                        ))}
                                </RightPart>
                            </Content>
                        </>
                    ) : (
                        <LoaderWrapper>
                            <Loader />
                        </LoaderWrapper>
                    )}
                </ModalBody>
            </Modal>
        </>
    );
};

const mapStateToProps = ({ item }) => ({
    photo: item.photo,
    comments: item.comments,
    isReady: item.isReady
});

const mapDispathcToProps = dispatch => ({
    setModalPhotoAction: id => {
        return dispatch(setModalPhoto(id));
    }
});

export default connect(mapStateToProps, mapDispathcToProps)(Item);
