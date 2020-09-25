import React, { Component } from 'react'

export class App extends Component {

  state = {
    names: [
      'Rashad', 'Alice', 'X Æ A-Xii', 'Beyonce', 'Khloe Kardashian', 'George Bush', 'Queen Elizabeth', 'Yeezy', 'Ivanka Trump', 'Leonardo DiCaprio', 
    ],
    searchTerm: ''
  }

  render() {

    const styles = {
      textAlign: 'center', 
      paddingTop: '30vh'
    }

    return (
      <div style={styles}>
        <input type='text' value={this.state.searchTerm} placeholder='Search for a name!'/>

        <h3>These are the important names:</h3>
        
      </div>
    )
  }
}

export default App;

