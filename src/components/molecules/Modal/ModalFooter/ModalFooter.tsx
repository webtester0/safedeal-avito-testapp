import React from 'react';
import { Footer } from './style';
import { MergeNativeProps } from '@common/interface';

type ModalFooterProps = MergeNativeProps<HTMLDivElement>;

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {
    return <Footer className={className}>{children}</Footer>;
};
