import { Component } from 'react';
import '../css/PlayDesign.css';
import '../css/Global.css';

enum BoardType {
    Ordered,
    Mixed,
    Empty
}

class PlayMode extends Component<any, any> {
    render(){
        return(
        <div className='PlayRoot' onClick={this.props.Mode}>
            <img className="PlayBoard" src={`/media/board/${this.props.type.toString()}.png`} alt=''></img>
            <div className='PlayData'>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <img src={this.props.iconSource} alt=''></img>
            </div>
        </div>
        )
    };
}

export class PlayModesList extends Component<any, any> {
    Name() {
        console.log("!");
    }

    render(){
        return(
            <div className='PlayContainer'>
                <PlayMode
                    type={BoardType.Ordered}
                    title="Play Online"
                    description="Play someone at your level!"
                    iconSource="/media/icons/play.png"
                    Mode={this.Name}
                />
                <PlayMode
                    type={BoardType.Mixed}
                    title="Solve Puzzles"
                    description="Find the right move!"
                    iconSource="/media/icons/quest.png"
                    Mode={this.Name}
                />
                <PlayMode
                    type={BoardType.Mixed}
                    title="Daily Puzzle"
                    description="👥 Solved by 1,043,651"
                    iconSource="/media/icons/daily.png"
                    Mode={this.Name}
                />
                <PlayMode
                    type={BoardType.Ordered}
                    title="Play Computer"
                    description="Jimmy - Friendly"
                    iconSource="/media/icons/play.png"
                    Mode={this.Name}
                />
                <PlayMode
                    type={BoardType.Empty}
                    title="Take Lessons"
                    description="Learn something new!"
                    iconSource="/media/icons/learn.png"
                    Mode={this.Name}
                />
            </div>
        )
    };
}