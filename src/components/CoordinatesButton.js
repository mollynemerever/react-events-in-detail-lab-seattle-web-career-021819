import React, {Component} from 'react';

export default class CoordinatesButton extends React.Component{

  // constructor(props){
  //   super(props)
  //   this.state = {onReceiveCoordinates: [event.clientX, event.clientY]}
  // }


  handleClick = (event) => {
    {this.props.onReceiveCoordinates([event.clientX, event.clientY])}
  }

  render(){
    return <button onClick={this.handleClick}> </button>
  }
}
