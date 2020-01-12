import React from 'react';
import { Footer } from './style';
import { MergedNativeProps } from '@common/interface';

type ModalFooterProps = MergedNativeProps<HTMLDivElement>;

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {
    return <Footer className={className}>{children}</Footer>;
};
