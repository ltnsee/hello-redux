
/**
 * react + redux
 */
import React, { Component } from 'react';
import * as Redux from 'redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0 }
    // store 由 Redux 的 createStore(reducer) 生成
    this.store = Redux.createStore(this.reducer);
    this.plusOne = this.plusOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
  }
  /**
   * 用户每次 dispatch(action) 后，都会触发 reducer 的执行reducer 的实质是一个函数，
   * 根据 action.type 来更新 state 并返回 nextState最后会用 reducer 的返回值 nextState 完全替换掉原来的 state
   */
  reducer(state, action) {
    // 首次调用本函数时设置初始 state
    state = state || { counter: 0 };
  
    switch (action.type) {
      case 'INCREMENT':
        return { counter: state.counter + 1 };
      case 'DECREMENT':
        return { counter: state.counter - 1 };
      default:
        return state; // 必须返回值，否则 nextState 即为 undefined
    }
  }
  plusOne(e){
    // 改变 state 必须 dispatch 一个 action
    // state 通过 store.getState() 获取，本质上一般是一个存储着整个应用状态的对象
    // action 本质上是一个包含 type 属性的普通对象，由 Action Creator (函数) 产生
    this.store.dispatch({ type: 'INCREMENT' });
    this.setState(this.store.getState());
    console.log( this.store.getState() );
  }
  minusOne(e){
    this.store.dispatch({ type: 'DECREMENT' });
    this.setState(this.store.getState());
    console.log( this.store.getState() );
  }
  render() {
    return (
      <div>
        <button onClick={this.minusOne}>减一</button>
        <span>{this.state.counter}</span>
        <button onClick={this.plusOne}>加一</button>
      </div>
    );
  }
}

export default App;