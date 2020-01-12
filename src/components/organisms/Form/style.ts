import styled from "styled-components";
import { device } from '@device'

export const FormBlock = styled.form`
    @media ${device.mobileS} {
        margin-top: 20px;
        padding: 0px 20px;
    }
`

export const InputForm = styled.div`
    margin-bottom: 20px;
`