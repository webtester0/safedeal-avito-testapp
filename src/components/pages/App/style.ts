import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
	flex-direction: column;
	min-height: 100%;
    padding: 15px 20px 20px 20px;
    max-width: 900px;
    margin: 0 auto;
`

export const Header = styled.header`
    font-family: "Roboto Condensed";
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
`

export const Content = styled.div`
    flex: 1 0 auto;
`

export const Footer = styled.footer`
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
`

export const Copyright = styled.div`
    font-family: "Roboto Condensed";
    color: #CCCCCC;
    font-size: 14px;
    line-height: 16px;
    margin-top: 12px;
`
