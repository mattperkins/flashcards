import React from 'react'
import ReactDOM from 'react-dom'

import Card from './Card'
import DrawButton from './DrawButton'

class App extends React.Component {

    render() {
        return (
               <div>
                   <Card />
                   <DrawButton />
               </div> 
        )
    }
}


const render = document.getElementById('app')
ReactDOM.render(<App />, render)