import styled from 'styled-components'
import { device } from '@device/device'


export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${device.mobileS} {
    
  }
`
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  align-items: center;
`