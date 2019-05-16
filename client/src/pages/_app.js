import React from 'react';
import withRedux from 'next-redux-wrapper';
import { withRouter } from 'next/router';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import createStore from '../store/createStore';
import AppContainer from '../components/AppContainer';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {}
        };
    }

    render() {
        const {
            Component, pageProps, store, router
        } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <AppContainer>
                        <Component router={router} {...pageProps} />
                    </AppContainer>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(createStore)(
    withRouter(MyApp)
);
