import styled from 'styled-components'
import { device } from '@device'

export const Body = styled.div`
  overflow: auto;
  padding: 30px;

  @media ${device.mobileS} {
    padding: 0px;
  }
`;

export const Content = styled.div`
  display: block;
  @media ${device.mobileS} {
      position: absolute;
      width: 100%;
      height: 100%;
    }
`;