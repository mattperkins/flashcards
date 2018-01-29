import React from 'react'

class DrawButton extends React.Component {

drawCard = ()=>{
    this.props.drawCard()
}

render(props) {

return (

    <div className="buttonWrapper">
        <div className="btn" onClick={this.drawCard}>Draw Card</div>
    </div>
)
}
}

export default DrawButton