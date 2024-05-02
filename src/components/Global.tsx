import { Component } from 'react';
import '../css/Global.css';

export class Header extends Component<any, any> {
    render() {
        if(this.props.chessTitle)   return (<img className='Header'src='/media/logo.png' alt=''/>);
        else                        return (<h1 className='Header'>{ this.props.title }</h1>)
    };
}

export class Container extends Component<any, any> {
    render = () => <div className='Container'>{this.props.children}</div>
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
        };
    }

    render() {
        return(
            <div className='Page' style={this.state.style}>{this.props.children}</div>
        )
    };
}