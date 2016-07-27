const cMiddleware = function(store){
	return function(next){
		return function(action){
			console.log(action);

			return next(action);
		}
	}
}

export default cMiddleware;