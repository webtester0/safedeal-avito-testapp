import styled from 'styled-components'
import {css} from 'styled-components'

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