import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const ModalWindow = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 24px rgba(45, 47, 51, 0.25);
  border-radius: 2px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  transform: translate(0, -10%);
  width: 620px;
`;