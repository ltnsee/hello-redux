import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

class App4 extends React.Component {
  render() {
    console.log('props', this.props);
    let { num, addAction } = this.props;
    return (
      <div>
        <h1>{num}</h1>
        <button onClick={addAction}>点我数字会增加</button>
      </div>
    )
  }
}

const addAction = {
  type: 'add'
};

let initState = {
  num: 0
};

let reducers = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      return { num: state.num + 1 };
    default:
      return state;
  }
};


const mapDispatchToPropsStore = (store) => ({
  num: store.num
});

const mapDispatchToPropsAction = (dispatch) => ({
  addAction: () => dispatch(addAction)
})

App4 = connect(mapDispatchToPropsStore, mapDispatchToPropsAction)(App4);

let store = createStore(reducers);
export const App = () => {
  return (
    <Provider store={store}>
      <App4 />
    </Provider>
  );
};