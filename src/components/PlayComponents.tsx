import { Component } from 'react';
import { Header, Page, Container } from './Global'
import '../css/PlayDesign.css';
import '../css/Global.css';

enum BoardType {
    Ordered,
    Mixed,
    Empty
}

export class PlayMode extends Component<any, any> {
    constructor(props : any) {
        super(props);
        this.state = {
            title:          this.props.title,
            description:    this.props.description,
            type:           this.props.type,
            iconSource:     this.props.iconSource
        }
    }

    render() {
        return(
            <div className='PlayRoot'>
                <img className="PlayBoard" src={`/media/board/${this.state.type.toString()}.png`} alt=''></img>
                <div className='PlayData'>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.description}</p>
                    <img src={this.state.iconSource} alt=''></img>
                </div>
            </div>
        )
    }
}

export class Play extends Component<any, any> {
    render = () => 
        <Page>
            <Header chessTitle={ true }/>
            <Container>
                <PlayMode
                    type={BoardType.Ordered}
                    title="Play Online"
                    description="Play someone at your level!"
                    iconSource="/media/icons/play.png"
                />
                <PlayMode
                    type={BoardType.Mixed}
                    title="Solve Puzzles"
                    description="Find the right move!"
                    iconSource="/media/icons/quest.png"
                />
                <PlayMode
                    type={BoardType.Mixed}
                    title="Daily Puzzle"
                    description="👥 Solved by 1,043,651"
                    iconSource="/media/icons/daily.png"
                />
                <PlayMode
                    type={BoardType.Ordered}
                    title="Play Computer"
                    description="Jimmy - Friendly"
                    iconSource="/media/icons/play.png"
                />
                <PlayMode
                    type={BoardType.Empty}
                    title="Take Lessons"
                    description="Learn something new!"
                    iconSource="/media/icons/learn.png"
                />
            </Container>
        </Page>;
}