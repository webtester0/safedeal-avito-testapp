import styled from 'styled-components'
import { css } from 'styled-components'

interface InnerWrapperProps {
    url?: string;
}

export const InnerWrapper = styled.div<InnerWrapperProps>`
    width: 32%;
    padding-bottom: 18%;
    margin-bottom: 2%;
    ${props => props.url && css`background-image: url(${props.url})`};
    background-size: cover;
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
    display: flex;
    flex-direction: column;
    margin-right: 14px;
`
export const RightPart = styled.div`
    display: flex;
    flex-direction: column;
`

export const Block = styled.div`
    display: block;
    width: 330px;
    height: 200px;
    background-color: peachpuff;
    margin-bottom: 30px;
`

export const Input = styled.div`
    display: block;
    width: 330px;
    height: 30px;
    border: 1px solid black;
    margin-bottom: 20px;
`