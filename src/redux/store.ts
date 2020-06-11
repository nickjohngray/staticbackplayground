import {compose, createStore} from 'redux';
import {getDevToolsExt} from './devTools';
import reducer from './reducers';

const store = createStore(reducer, compose(...getDevToolsExt()));

//store.dispatch({type: actions.GlobalActions.INIT_APP});

export default store;
