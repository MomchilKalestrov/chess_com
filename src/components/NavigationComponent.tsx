import { Component } from 'react';
import '../css/NavigationDesign.css';
import '../css/Global.css';
import CSS from "csstype";

let page : number = 0;

enum Colour {
    Green,
    Yellow,
    Blue,
    Purple,
    White
}

const green : CSS.Properties = {
    filter: 'brightness(0) saturate(100%) invert(53%) sepia(13%) saturate(1164%) hue-rotate(46deg) brightness(100%) contrast(88%)'
}

const yellow : CSS.Properties = {
    filter: 'brightness(0) saturate(100%) invert(95%) sepia(14%) saturate(2471%) hue-rotate(325deg) brightness(88%) contrast(102%)'
}

const blue : CSS.Properties = {
    filter: 'brightness(0) saturate(100%) invert(43%) sepia(98%) saturate(279%) hue-rotate(168deg) brightness(96%) contrast(96%)'
}

const purple : CSS.Properties = {
    filter: 'brightness(0) saturate(100%) invert(70%) sepia(66%) saturate(7318%) hue-rotate(236deg) brightness(99%) contrast(95%)'
}

const white : CSS.Properties = {
    filter: 'brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(122%) hue-rotate(277deg) brightness(118%) contrast(100%)'
}

class NavigationButton extends Component<any, any> {
    colour : CSS.Properties = white;
    render() {
        this.colour = this.props.colour;
        return(
        <button className='NavigationOption Ripple' style={ this.colour }>
            <img src={`/media/nav/${this.props.title}.svg`} alt=''/>
            <p>{this.props.title}</p>
        </button>
        )
    };
}

export class NavigationMenu extends Component<any, any> {
    render(){
        return(
            <div className='NavigationRoot'>
                <NavigationButton title='Home'      colour={ green }/>
                <NavigationButton title='Puzzles'   colour={ yellow }/>
                <NavigationButton title='Learn'     colour={ blue }/>
                <NavigationButton title='Watch'     colour={ purple }/>
                <NavigationButton title='More'      colour={ white }/>
            </div>
        )
    };
}