import { Component } from 'react';
import { Header, Page, Container } from './Global'
import '../css/MenuDesign.css';
import '../css/Global.css';

class MenuListing extends Component<any, any> {
    render = () => 
        <div className='MenuListing RippleDiff Ripple'>
            <img src={ `/media/menu/${this.props.option.toLowerCase().replace(' ', '')}.png` } alt='' />
            <p>{ this.props.option }</p>
        </div>
}

export class Menu extends Component<any, any> {
    render = () => 
        <Page>
            <Header chessTitle={ true } />
            <Container>
                <MenuListing option='Stats'           />
                <MenuListing option='Profile'         />
                <MenuListing option='Theme'           />
                <MenuListing option='Awards'          />
                <MenuListing option='Friends'         />
                <MenuListing option='Messages'        />
                <MenuListing option='Settings'        />
                <h4>Learn</h4>
                <MenuListing option='Insights'        />
                <MenuListing option='Vision'          />
                <MenuListing option='Videos'          />
                <MenuListing option='Solo chess'      />
                <h4>Connect</h4>
                <MenuListing option='Events'          />
                <MenuListing option='Leaderboards'    />
                <MenuListing option='Players League'  />
                <MenuListing option='ChessTV'         />
                <MenuListing option='Articles'        />
                <MenuListing option='Watch'           />
                <MenuListing option='Forums'          />
                <MenuListing option='Clubs'           />
                <MenuListing option='News'            />
                <MenuListing option='Other apps'      />
                <h4>Account</h4>
                <MenuListing option='Report Problems' />
                <MenuListing option='Help'            />
            </Container>
        </Page>
}