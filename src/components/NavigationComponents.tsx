import { Component } from 'react';
import { Page } from './Global';
import CSS from "csstype";
import '../css/NavigationDesign.css';
import '../css/Global.css';

const green: CSS.Properties = {
    filter: 'brightness(0) saturate(100%) invert(53%) sepia(13%) saturate(1164%) hue-rotate(46deg) brightness(100%) contrast(88%)'
}

const yellow: CSS.Properties = {
    filter: 'brightness(0) saturate(100%) invert(95%) sepia(14%) saturate(2471%) hue-rotate(325deg) brightness(88%) contrast(102%)'
}

const blue: CSS.Properties = {
    filter: 'brightness(0) saturate(100%) invert(43%) sepia(98%) saturate(279%) hue-rotate(168deg) brightness(96%) contrast(96%)'
}

const purple: CSS.Properties = {
    filter: 'brightness(0) saturate(100%) invert(70%) sepia(66%) saturate(7318%) hue-rotate(236deg) brightness(99%) contrast(95%)'
}

const white: CSS.Properties = {
    filter: 'brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(122%) hue-rotate(277deg) brightness(118%) contrast(100%)'
}

const none: CSS.Properties = {
    filter: "none"
}

class NavigationButton extends Component<any, any> {
    private static list: Array<NavigationButton> = new Array<NavigationButton>();
    private static curIndex : number = 0;
    private index : number;
    readonly colourClick: CSS.Properties = none;

    constructor(props: any) {
        super(props);
        this.index = NavigationButton.curIndex++;
        this.colourClick = props.colour;
        this.state = {
            title: props.title,
            colour: none,
            page: props.page
        }
        this.Click = this.Click.bind(this);
        NavigationButton.list.push(this);
        NavigationButton.list[0].setState({
            colour: NavigationButton.list[0].colourClick
        });
    }

    private Click() {
        for(let i: number = 0; i < NavigationButton.list.length; ++i) {
            NavigationButton.list[i].setState({ colour: none });
            Page.list[i].setState({ style: { display: 'none' } });
        }

        this.setState({ colour: this.colourClick });
        Page.list[this.index].setState({ style: { display: 'block' } });
    }

    render = () =>
        <button className='NavigationOption Ripple' onClick={this.Click}>
            <img src={`/media/nav/${this.state.title}.svg`} alt='' style={this.state.colour}/>
            <p style={this.state.colour}>{this.state.title}</p>
        </button>
}

export class NavigationMenu extends Component<any, any> {
    render = () =>
        <div className='NavigationRoot'>
            <NavigationButton title='Home'      colour={ green }    page={ Page.list[0] } />
            <NavigationButton title='Puzzles'   colour={ yellow }   page={ Page.list[1] } />
            <NavigationButton title='Learn'     colour={ blue }     page={ Page.list[2] } />
            <NavigationButton title='Watch'     colour={ purple }   page={ Page.list[3] } />
            <NavigationButton title='More'      colour={ white }    page={ Page.list[4] } />
        </div>
}