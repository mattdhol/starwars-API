import React from "react" 
import {Link} from 'react-router-dom'


const Starships = (props) => {

    return(
    <div>
        {props.ships.length === 0 ? (
            <h2>Loading Ships.. </h2>
          ) : (
            <h3>Count: {props.ships.length}</h3>
          ) }
          <h2>Status</h2>

        {props.ships.map ((ship, id) => (
            <>
            <Link to={`/ships/${id}`}> 
            
            <h3> Ship Name: {ship.name} </h3>
        
            </Link>
            </>
        ))
        
        }


          </div>
    )
}

export default Starships