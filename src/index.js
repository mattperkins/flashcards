import React from 'react'
import ReactDOM from 'react-dom'

import firebase from 'firebase/app'
import 'firebase/database'

import { DB_CONFIG } from './db_config'
// import data from './data.json'

import Card from './Card'
import DrawButton from './DrawButton'

class App extends React.Component {

constructor(props) {
super(props)

    this.app = firebase.initializeApp(DB_CONFIG)
    this.database = this.app.database().ref().child('cards')

    this.state = {
        cards: [],
        currentCard: {}    
    }
}

componentWillMount(){
    const currentCards = this.state.cards

    this.database.on('child_added', snap => {
        currentCards.push({
            id: snap.key,
            meme: snap.val().meme,
        })

    this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
    })
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

               <div>
                   <Card 
                        meme={this.state.currentCard.meme} />
                 </div>

                 <div>
                    <DrawButton drawCard={this.updateCard} />
                 </div>  
                   
               </div> 
        )
    }
}


const render = document.getElementById('app')
ReactDOM.render(<App />, render)