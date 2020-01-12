import React, { useState, useCallback, useEffect } from 'react';
import { InnerWrapper, IconBtn, Header, Content, LeftPart, RightPart, Block, Input } from './style';
import { Modal } from '@components/Modal';
import { ModalBody } from '@components/Modal/ModalBody';
import axios from 'axios';

interface ItemProps {
    url?: string;
    id?: number;
}

export const Item: React.FC<ItemProps> = ({ url, id }) => {
    const [isOpen, setOpen] = useState(false);
    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    useEffect(() => {
        isOpen
            ? axios
                  .get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
                  .then(result => console.log(result))
                  .catch(error => console.log(error))
            : null;
    }, [isOpen]);
    return (
        <>
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
                            <Block></Block>
                            <Input></Input>
                            <Input></Input>
                            <Input></Input>
                        </LeftPart>
                        <RightPart>
                            <Input></Input>
                            <Input></Input>
                            <Input></Input>
                        </RightPart>
                    </Content>
                </ModalBody>
            </Modal>
        </>
    );
};
