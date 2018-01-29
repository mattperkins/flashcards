import React from 'react'
import ReactDOM from 'react-dom'

import firebase from 'firebase/app'
import 'firebase/database'

import { DB_CONFIG } from './db_config'
import Card from './Card'
import DrawButton from './DrawButton'

class App extends React.Component {

constructor(props) {
super(props)

    this.app = firebase.initializeApp(DB_CONFIG)
    
    this.state = {
        cards: [
            {id: 1, eng: "Monday", meme: "You look great, fact!"},
            {id: 2, eng: "Tuesday", meme: "You got this, go get um champ!"},
            {id: 3, eng: "Wednesday", meme: "Make lemonade. True Story"},
            {id: 4, eng: "Thursday", meme: "Health is wealth"},
            {id: 5, eng: "Friday", meme: "Be positive and attract positive people"}
        ],
        currentCard: {}    
    }
}

componentWillMount(){
    const currentCards = this.state.cards

    this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
    })
}

getRandomCard(currentCards){
    let card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card)
}

updateCard = ()=>{
    const currentCards = this.state.cards

    this.setState({
        currentCard: this.getRandomCard(currentCards)
    })
}

    render() {
        return (
            <div>

               <div className="cardRow">
                   <Card 
                        eng={this.state.currentCard.eng} 
                        meme={this.state.currentCard.meme}/>
                 </div>

                 <div className="buttonRow">
                    <DrawButton drawCard={this.updateCard} />
                 </div>  
                   
               </div> 
        )
    }
}


const render = document.getElementById('app')
ReactDOM.render(<App />, render)