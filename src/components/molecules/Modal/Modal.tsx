import React from 'react';
import ReactDOM from 'react-dom';
import { ModalInner } from './ModalInner';
import { MergedNativeProps } from '@common/interface';

interface ModalOwnProps {
    isOpen: boolean;

    onEscape?: () => void;

    onClickAway?: (event: React.MouseEvent) => void;
}

type ModalProps = MergedNativeProps<HTMLDivElement, ModalOwnProps>;

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onEscape,
    onClickAway,
    children,
    className
}) => {
    return (
        <>
            {isOpen &&
                ReactDOM.createPortal(
                    <ModalInner onEscape={onEscape} onClickAway={onClickAway} className={className}>
                        {children}
                    </ModalInner>,
                    document.body
                )}
        </>
    );
};
