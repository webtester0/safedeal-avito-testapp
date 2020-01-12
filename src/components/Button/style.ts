import styled from 'styled-components'
import { css } from 'styled-components'

interface BaseButtonProps {
    bgc?: string
}

export const BaseButton = styled.button<BaseButtonProps>`
    width: 100%;
    height: 30px;
    border-radius: 3px;
    ${props => props.bgc && css`background-color: ${props.bgc}`}
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 13px;
    line-height: 15px;
    outline: none;
    &:active {
        background-color: #4a86cc;
    } 
`