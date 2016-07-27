// reducer
const counter =  function (state = 0, action){
	switch(action.type){
	case 'ADD_COUNT':
		return state + 1;

	case 'SUB_COUNT':
		return state - 1;

	default:
		return state;
	}
}

export default counter;