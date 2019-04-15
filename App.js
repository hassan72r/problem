import React, {component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends component{
	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}
	render(){
	return(
          <div className='tc'>
            <h1>Rebofriends</h1>
            <SearchBox />
            <Cardlist robots={this.state.robots} />
          </div>
  );
 }
}
export default App;