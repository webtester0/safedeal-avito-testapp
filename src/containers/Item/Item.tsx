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
    InputForm,
    ButtonContent
} from './style';
import { Modal } from '@components/Modal';
import { ModalBody } from '@components/Modal/ModalBody';
import { setModalPhoto } from '@store/actions/item';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Comment } from '@components/Comment';
import axios from 'axios';

interface ItemProps {
    url?: string;

    id?: number;

    setModalPhotoAction?: Function;

    comments?: {
        id: number;
        text: string;
        date: number;
    }[];

    photo?: string;
}

const Item: React.FC<ItemProps> = ({ url, id, setModalPhotoAction, comments, photo }) => {
    const [isOpen, setOpen] = useState(false);
    //TODO: Loader
    const handleOpen = useCallback(() => {
        setOpen(true);
        setModalPhotoAction(id);
    }, []);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const submitCommit = id => {
        axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
            name: `Denzel`,
            comment: `Awesome`
        });
    };

    const handleSubmit = useCallback(() => {
        submitCommit(id);
    }, []);

    return (
        <>
            {/* TODO: Lodaer */}
            <InnerWrapper url={url} onClick={handleOpen} />
            <Modal isOpen={isOpen} onEscape={handleClose} onClickAway={handleClose}>
                <ModalBody>
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
                            <InputForm>
                                <Input placeholder={'Ваше имя'} />
                            </InputForm>
                            <InputForm>
                                <Input placeholder={'Ваш комментарий'} />
                            </InputForm>
                            {/* TODO: submit при клике на enter и обернуть все в форму, с обязательными полями */}
                            <Button bgc={'#4997D0'}>
                                <ButtonContent onClick={handleSubmit}>
                                    {'Оставить комментарий'}
                                </ButtonContent>
                            </Button>
                        </LeftPart>
                        <RightPart>
                            {comments &&
                                comments.map(({ id, text, date }) => (
                                    <Comment key={id} comment={text} date={date} />
                                ))}
                        </RightPart>
                    </Content>
                </ModalBody>
            </Modal>
        </>
    );
};

const mapStateToProps = ({ item }) => ({
    //TODO
    photo: item.photo,
    comments: item.comments
});
//TODO: убрать console.log
const mapDispathcToProps = dispatch => ({
    setModalPhotoAction: id => {
        return dispatch(setModalPhoto(id));
    }
});

export default connect(mapStateToProps, mapDispathcToProps)(Item);
