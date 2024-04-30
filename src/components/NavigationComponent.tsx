import { Component } from 'react';
import '../css/NavigationDesign.css';
import '../css/Global.css';

class NavigationButton extends Component<any, any> {
    render(){
        return(
        <button className='NavigationOption Ripple'>
            <img src={this.props.icon} alt=''/>
            <p>{this.props.title}</p>
        </button>
        )
    };
}

export class NavigationMenu extends Component<any, any> {
    render(){
        return(
            <div className='NavigationRoot'>
                <NavigationButton title='Home'      icon=''     colour='#7A9757'/>
                <NavigationButton title='Puzzles'   icon=''     colour='#E7AF42'/>
                <NavigationButton title='Learn'     icon=''     colour='#4B87C5'/>
                <NavigationButton title='Watch'     icon=''     colour='#9661F7'/>
                <NavigationButton title='More'      icon=''     colour='#FFFFFF'/>
            </div>
        )
    };
}