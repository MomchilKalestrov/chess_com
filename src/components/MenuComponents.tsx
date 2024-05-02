import { Component } from 'react';
import { Header, Page, Container } from './Global'
import '../css/MenuDesign.css';
import '../css/Global.css';

class MenuListing extends Component<any, any> {
    render = () => 
        <div className='MenuListing RippleDiff Ripple'>
            <img src={ this.props.icon } alt='' />
            <p>{ this.props.option }</p>
        </div>
}

export class Menu extends Component<any, any> {
    render = () => 
        <Page>
            <Header chessTitle={ true } />
            <Container>
                <MenuListing option='Proof' icon='/media/logo.png' />
                <div className='MenuDiv'></div>
                <MenuListing option='of' icon='/media/logo.png' />
                <div className='MenuDiv'></div>
                <MenuListing option='consept' icon='/media/logo.png' />
                <h4>WHAT</h4>
                <MenuListing option='will' icon='/media/logo.png' />
                <div className='MenuDiv'></div>
                <MenuListing option='fix' icon='/media/logo.png' />
                <div className='MenuDiv'></div>
                <MenuListing option='later :)' icon='/media/logo.png' />
            </Container>
        </Page>
}