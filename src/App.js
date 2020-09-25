import React, { Component } from 'react';
import NamesContainer from './NamesContainer'

export class App extends Component {

  state = {
    names: [
      'Rashad', 'Alice', 'X Æ A-Xii', 'Beyonce', 'Khloe Kardashian', 'George Bush', 'Queen Elizabeth', 'Yeezy', 'Ivanka Trump', 'Leonardo DiCaprio', 
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {

    const styles = {
      textAlign: 'center', 
      paddingTop: '30vh'
    }

    return (
      <div style={styles}>
        <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Search for a name!'/>
        
        <h3>These are the important names:</h3>
        <NamesContainer />
      </div>
    )
  }
}

export default App;

