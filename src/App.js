import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './components/UserForm';
import ViewList from './components/ViewList';
class App extends Component {
  state = {
    data : [],
    ruta: 'lista',
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) => this.setState( {data} ))
  }

  render() {
    console.log(this.state)
    const { ruta, data } = this.state
    return (
      <div className="App">
        {ruta === 'lista' && <ViewList data={data}/>}
        {ruta === 'formulario' && <UserForm />}
      </div>
    );
  }
}

export default App;
