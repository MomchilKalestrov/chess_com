import { Component } from 'react';
import { Header, Page, Container, TileButton } from './Global'
import '../css/PuzzleDesign.css';
import '../css/Global.css';

export class Puzzle extends Component<any, any> {
    render = () =>
        <Page>
            <Header title='Puzzles' />
            <Container>
                <TileButton title='Puzzles'         subtitle='Find the right move!'                             icon='/media/puzzles/puzzles.png' />
                <TileButton title='Daily Puzzle'    subtitle='Puzzles get harder throughout the week'           icon='/media/puzzles/daily.png' />
                <TileButton title='Puzzle Rush'     subtitle="Race against the clock. 3 strikes and you're out!"icon='/media/puzzles/rush.png' />
                <TileButton title='Puzzle Battle'   subtitle='Rush against another player to win'               icon='/media/puzzles/battle.png' />
                <TileButton title='Custom Puzzles'  subtitle='Choose puzzles by the theme and rating'           icon='/media/puzzles/custom.png' />
            </Container>
        </Page>
}