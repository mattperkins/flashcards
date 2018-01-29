import React from 'react'
 
const Card = ({eng, meme}) => {
return (
<div className="card-wrapper">
    <div className="card">
        <div className="front">
            <div className="eng">
                {eng}
            </div>
        </div>

        <div className="back">
            <div className="meme">
                {meme}
            </div>
        </div>
    </div>
</div>
)
}
 
export default Card