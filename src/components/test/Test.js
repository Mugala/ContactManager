import React, { Component } from 'react'

class Test extends Component {
  state = {
    test: 'test'
  };

  componentDidMount(){
    console.log('Component did mount...');
  }

  componentWillMount(){
    console.log('Component will mount');
  }
  componentDidUpdate(){
    console.log('Component Did update...');
  }

  componentWillUpdate(){
    console.log('Component will update...');
  }

  componentWillReceiveProps(nextProps, nextState){
    console.log('ComponentWillReceiveProps');
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate');
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;