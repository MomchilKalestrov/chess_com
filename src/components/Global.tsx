import { Component } from 'react';
import '../css/Global.css';

export class Header extends Component<any, any> {
    render = () =>
        this.props.chessTitle
        ?
        <img className='Header'src='/media/logo.png' alt=''/>
        :
        <h1 className='Header'>{ this.props.title }</h1>
}

export class Container extends Component<any, any> {
    render = () => <div className='Container' style={this.props.style}>{this.props.children}</div>
}

export class Page extends Component<any, any> {
    public static list : Array<any> = new Array<any>();
    
    constructor(props: any) {
        super(props);
        Page.list.push(this);
        this.state = {
            style: {
                display: 'none'
            }
        }
        Page.list[0].state = {
            style: {
                display: 'black'
            }
        }
    }

    render = () => <div className='Page' style={this.state.style}>{this.props.children}</div>
}

export class TileButton extends Component<any, any> {
    render = () =>
        this.props.titleOnly
        ?
        <div className='TileButton Ripple' style={ { height: '112px !important' } }>{ this.props.title }</div>
        :
        <div className='TileButton Ripple'>
            <img src={ this.props.icon } alt='' />
            <div>
                <h5>{ this.props.title }</h5>
                <p>{ this.props.subtitle }</p>
            </div>
        </div>
}