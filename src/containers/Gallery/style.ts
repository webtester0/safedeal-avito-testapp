import styled from 'styled-components'
import { device } from '@device'


export const Wrapper = styled.div`
  @media ${device.mobileS} {
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      overflow: auto;
      max-height: calc(100vh - 230px);
    }
`
export const InnerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  align-items: center;
`