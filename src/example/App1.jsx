
/**
 * 源生react state  
 * 
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Inp = (props) => {
  return (
    <input type="text" placeholder="..." value={props.value} onChange={props.fun} />
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
    this.changeText = this.changeText.bind(this);
    this.getTextValue = this.getTextValue.bind(this);
  }
  changeText(e) {
    this.setState({
      val: e.target.value
    })
  }
  getTextValue() {
    // 给某个元素添加ref属性，就表示在当前类对象的refs上加了一个对应的属性，这个属性指向当前元素的DOM对象
    console.log(this.refs.text, this.refs.text.value);
  }
  render() {
    return (
      <div>
        <h4>{this.state.val}</h4>
        <Inp value={this.state.val} fun={this.changeText} />
        <br />
        <input type="text" placeholder="请输入内容" ref="text" onChange={this.changeText} value={this.state.val} />
        <br />
        <button type="button" onClick={this.getTextValue}>获取输入内容</button>
      </div>
    );
  }
}

export default App;

Inp.PropTypes = {
  val: PropTypes.string,
  fun: PropTypes.func
}