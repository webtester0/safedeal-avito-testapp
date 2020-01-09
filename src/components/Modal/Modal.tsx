import React from 'react';
import ReactDOM from 'react-dom';
import { ModalInner } from './ModalInner';

interface ModalProps {
    isOpen: boolean;

    onEscape?: () => void;

    onClickAway?: (event: React.MouseEvent) => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onEscape, onClickAway, children }) => {
    return (
        <>
            {isOpen &&
                ReactDOM.createPortal(
                    <ModalInner onEscape={onEscape} onClickAway={onClickAway}>
                        {children}
                    </ModalInner>,
                    document.body
                )}
        </>
    );
};
