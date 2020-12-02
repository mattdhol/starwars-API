import React from "react" 
import {Link} from 'react-router-dom'


const Ship = (props) => {

    return(
    <div>
           
            <Link to={'/'}> 
            Take Me Home!!!!
            </Link> 
            <h3> Ship Name: {props.ship.name} </h3>
            <h3> Ship Label: {props.ship.label} </h3>   
            </div>          
        )
}

export default Ship