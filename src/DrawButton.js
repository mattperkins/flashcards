import React from 'react'

class DrawButton extends React.Component {

drawCard = ()=>{
    this.props.drawCard()
}

render(props) {

return (

    <div>
        <div className="btn" onClick={this.drawCard}>Press for happiness</div>
    </div>
)
}
}

export default DrawButton