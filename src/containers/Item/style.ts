import styled from 'styled-components'
import { css } from 'styled-components'
import { device } from '@device'


interface InnerWrapperProps {
    url?: string;
}

export const InnerWrapper = styled.div<InnerWrapperProps>`
    width: 32%;
    padding-bottom: 18%;
    margin-bottom: 2%;
    ${props => props.url && css`background-image: url(${props.url})`};
    background-size: cover;

    @media ${device.mobileS} {
        width: 100%;
        min-height: 180px;
        margin-bottom: 5%;
        padding: 0;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`

export const IconBtn = styled.button`
    background: none;
    border: none;
    outline: inherit;
    flex-grow: 0;
    &:hover {
        cursor: pointer;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
`

export const LeftPart = styled.div`
    margin-right: 14px;
    flex-grow: 2;
`
export const RightPart = styled.div`
    flex-grow: 1;
`

export const Block = styled.div<InnerWrapperProps>`
    height: 200px;
    margin-bottom: 30px;
    ${props => props.url && css`background-image: url(${props.url})`};
    background-size: cover;
`

export const InputForm = styled.div`
    margin-bottom: 20px;
`

export const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
`

export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`