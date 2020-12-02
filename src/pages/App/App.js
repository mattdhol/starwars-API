import './App.css';
import { getAllStarships } from "../../service/services/sw-api";
import React from "react"
import {Route, Switch, Link} from 'react-router-dom'
import Starships from '../Starships/Starships'
import Ship from '../../component/ship/Ship'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ships: []
    }
  }

  async componentDidMount(props) {
    const ships = await getAllStarships();
    console.log(ships);
    this.setState({ ships: ships.results });
  }

  render() {
    return (
      <div>
        {/* <Starships ships = {this.state.ships} /> */}

        <Switch>
        <Route exact path = '/'
        render = {()=>  <Starships ships = {this.state.ships} /> }
        >
        </Route>
        <Route exact path = '/ships/:id' 
        render={(props) => (
              <Ship
                {...props}
                ship={this.state.ships[props.match.params.id]}
              />
            )} >
            </Route>
        </Switch>

      </div>

    );
}
}
export default App;
