import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Body, Header, Content, Footer, Copyright } from './style';
import { Gallery } from '@containers/Gallery';
import { Divider } from '@molecules/Divider';

const AppComponent: React.FC = () => {
    return (
        <Body>
            <Content>
                <Header>test app</Header>
                <Gallery />
            </Content>
            <Footer>
                <Divider />
                <Copyright>&copy; 2019-2020</Copyright>
            </Footer>
        </Body>
    );
};

export const App = hot(AppComponent);
