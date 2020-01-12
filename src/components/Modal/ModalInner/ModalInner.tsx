import React, { useEffect, useCallback } from 'react';
import { Wrapper, ModalOverlay, ModalWindow } from './style';
import { MergeNativeProps } from '@common/interface';

interface ModalInnerOwnProps {
    onEscape?: () => void;

    onClickAway?: (event: React.MouseEvent) => void;

    onClose?: (event: React.MouseEvent) => void;
}

type ModaInnerlProps = MergeNativeProps<HTMLDivElement, ModalInnerOwnProps>;

export const ModalInner: React.FC<ModaInnerlProps> = ({
    onEscape,
    onClickAway,
    children,
    className
}) => {
    const handleKeyDown = useCallback(
        e => {
            if (e.keyCode === 27) {
                onEscape && onEscape();
            }
        },
        [onEscape]
    );
    useEffect(() => {
        if (onEscape) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown, onEscape]);

    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.documentElement.style.removeProperty('overflow');
        };
    }, []);

    return (
        <Wrapper>
            <ModalOverlay onClick={onClickAway} />
            <ModalWindow className={className}>{children}</ModalWindow>
        </Wrapper>
    );
};
