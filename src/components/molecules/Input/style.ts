import styled, { css } from 'styled-components'

interface InputTextProps {
    visible?: boolean;
}

export const InputText = styled.input<InputTextProps>`
    display: block;
    border: 1px solid #CCCCCC;
    padding: 10px 0px 8px 8px;
    font-family: 'Roboto';
    font-size: 13px;
    line-height: 15px;
    border-radius: 3px;
    height: 30px;
    width: 100%;
    ${props => !props.visible && css`border: none; background-color: transparent`}
    &::placeholder {
        color: #CCCCCC;
    }
    &:active {
        outline: none;
    }
    &:focus {
        outline: none;
    }
`

interface InputSubProps {
    bgc?: string
}

export const InputSub = styled.input<InputSubProps>`
    font-family: 'Roboto';
    font-size: 13px;
    line-height: 15px;
    border-radius: 3px;
    height: 30px;
    width: 100%;
    ${props => props.bgc && css`background-color: ${props.bgc}`}
    color: #ffffff;
    outline: none;
    &:active {
        background-color: #4a86cc;
    } 
`