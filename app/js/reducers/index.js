import { combineReducers } from 'redux';
import cats from './cats'
import counter from './counter'

const reducers = combineReducers({
	counter,
	cats
});

export default reducers;