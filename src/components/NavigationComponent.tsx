import { Component } from 'react';
import '../css/NavigationDesign.css';
import '../css/Global.css';

let page : number = 0;

class NavigationButton extends Component<any, any> {
    colour : string = '#ffff';
    render() {
        this.colour = this.props.colour;
        return(
        <button className='NavigationOption Ripple'>
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
                <NavigationButton title='Home'      colour='#7A9757'/>
                <NavigationButton title='Puzzles'   colour='#E7AF42'/>
                <NavigationButton title='Learn'     colour='#4B87C5'/>
                <NavigationButton title='Watch'     colour='#9661F7'/>
                <NavigationButton title='More'      colour='#FFFFFF'/>
            </div>
        )
    };
}