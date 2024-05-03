import { Component } from 'react';
import { Header, Page, Container, TileButton } from './Global'
import '../css/PlayDesign.css';
import '../css/Global.css';

export class Learn extends Component<any, any> {
    render = () => 
        <Page>
            <Header title='Learn Chess' />
            <Container>
                <TileButton title='Lessons'  subtitle='Learn to play from chess masters' icon='/media/learn/lessons.png'  />
                <TileButton title='Explorer' subtitle='Learn and explore chess openings' icon='/media/learn/explorer.png' />
                <TileButton title='Endgames' subtitle='Improve your endgame play'        icon='/media/learn/endgames.png' />
                <TileButton title='Practise' subtitle='Play from specific position'      icon='/media/learn/practise.png' />
                <TileButton title='Analysis' subtitle='Review games or explore ideas'    icon='/media/learn/analysis.png' />
            </Container>
        </Page>
}