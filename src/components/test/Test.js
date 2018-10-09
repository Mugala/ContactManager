import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '',
    body:''

  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.id,
        body: data.title
      })
      );
  }

  // componentWillMount(){
  //   console.log('Component will mount');
  // }
  // componentDidUpdate(){
  //   console.log('Component Did update...');
  // }

  // componentWillUpdate(){
  //   console.log('Component will update...');
  // }

  // componentWillReceiveProps(nextProps, nextState){
  //   console.log('ComponentWillReceiveProps');
  // }

  // static getDerivedStateFromProps(nextProps, prevState){
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.log('getSnapshotBeforeUpdate');
  // }

  render() {
    const {title, body } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;