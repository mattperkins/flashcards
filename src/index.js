import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "..."
        }
    }

    changeMsg = () => {
        if (this.state.msg === "Lets get started.") {
            this.setState({
                msg: "..."
            })
        } else if (this.state.msg === "...") {
            this.setState({
                msg: "Lets get started."
            })
        }
    }

    render() {
        return (
            <div className="masthead">
                <h1 className="pull-up cta-btn" onClick={this.changeMsg}>Hello, World!</h1>
                <p className="highlight">{this.state.msg}</p>
            </div>
        )
    }
}


const render = document.getElementById('app')
ReactDOM.render(<App />, render)