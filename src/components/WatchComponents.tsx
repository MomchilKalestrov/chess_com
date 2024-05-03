import { Component } from 'react';
import { Header, Page, Container } from './Global'
import '../css/Global.css';

export class Watch extends Component<any, any> {
    render = () => 
        <Page>
            <Header title='Watch' />
            <Container>
                <p style={{ color: 'white' }}>Yeah IDGAF about this page.</p>
            </Container>
        </Page>
}