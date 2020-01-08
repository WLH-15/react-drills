import React from 'react';
import './App.css';
import Todo from './Todo';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      array: [],
      input: ''
    }
    // this.addedMate = this.addedMate.bind(this)
  }
  changling(val){
    this.setState({input: val})
  }
  addedMate =() =>{
    this.setState({
      array: [...this.state.array, this.state.input], 
      input: ''
    });}

  render(){
    // console.log(this.sta1te.array)
    let array = this.state.array.map((element, index)=>{
      return <Todo key={index} task={element} />
          })
    return(
    <div className="App">
      <h1>My to-do list:</h1>

      <div>
      <input 
      value={this.state.input}
      onChange={e=> this.changling(e.target.value)}
      placeholder='Enter New Task' />
      <button onClick={this.addedMate} >Add</button>
      
      </div>

      <br />
      {array}
    </div>
  );
}
}


export default App;
