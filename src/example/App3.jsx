import React from 'react';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

// 接收数据的渲染，而不去改变数据
class App3 extends React.Component {
  render() {
    let { num, addAction } = this.props;
    return (
      <div>
        <h1>{num}</h1>
        <button onClick={addAction}>点我数字会增加</button>
      </div>
    )
  }
}

// action
// 需要告诉方法我们要做什么事情  指令
// 根据 对象 并没有做任何事情，只是标注做的是什么事情
const addAction = {
  type: 'add'
};

// 创建一个初始化的数据对象
let initState = {
  num: 0
};

// reducers
// 我们去执行指令（action）然后去改变数据
// redux建议不要污染原始数据
let reducers = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      return { num: state.num + 1 };
    default:
      return state;
  }
};


// combineReducers(reducers, reducers1, reducers2, ...)
// 用于合并reducers，为了一起维护数据源
// const reducer = combineReducers(reducers);

// stos
// 创建redux适用的数据对象，是一个单一的store
// redux(state, action, renducer) {
//   reducers(state, action);
// }
let store = createStore(reducers);

// 用于参数传递（state或store）
const mapDispatchToPropsStore = state => ({
  num: state.num
});

// 当前所有的指令
const mapDispatchToPropsAction = (dispatch) => ({
  // 映射对应的方法
  addAction: () => dispatch(addAction)
})

// connect
// connect(用于参数传递, 当前所有的指令)
App3 = connect(mapDispatchToPropsStore, mapDispatchToPropsAction)(App3);

export const App = () => {
  return (
    <Provider store={store}>
      <App3 />
    </Provider>
  );
};