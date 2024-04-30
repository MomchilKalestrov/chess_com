import { Component } from 'react';
import '../css/Global.css';

export class Header extends Component<any, any> {
    render(){
        console.log(this.props.chessTitle);
        if(this.props.chessTitle)   return (<img className='Header'src='/media/logo.png'/>);
        else                        return (<h1 className='Header'>Botev</h1>)
    };
}