import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxSaga from 'redux-saga';


function reducers () {   // los reducer son los que van a actualizar su estado
    return {
        testing: ''
    };
}

export default () => {
    return{
        ...createStore(reducers, applyMiddleware(thunk))
    };
};
