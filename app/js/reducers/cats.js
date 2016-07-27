const initialState = 
[{
	"isActive": false,
	"price": "$3,453.47",
	"picture": "http://placeimg.com/200/200/any",
	"name": "Glenda Coffey",
	"about": "Ipsum exercitation sint dolor id sit commodo veniam sit cillum esse in mollit dolor qui. Proident anim commodo nulla id. Deserunt ipsum nostrud officia dolor esse voluptate nulla voluptate magna dolor et. Est consectetur non nostrud laborum sint voluptate qui et velit.\r\n"
}, {
	"isActive": true,
	"price": "$2,898.86",
	"picture": "http://placeimg.com/200/200/any",
	"name": "Melody Strong",
	"about": "Do nulla veniam minim nostrud non labore cillum Lorem consectetur magna dolore velit velit culpa. Laborum laboris ipsum excepteur in cillum. Deserunt laboris anim nostrud nisi ullamco. Elit et quis tempor sunt aute voluptate non consequat reprehenderit in mollit occaecat. Minim exercitation qui magna aliqua proident officia aliqua quis velit. Exercitation do reprehenderit ex commodo labore officia. Excepteur commodo consequat ex deserunt cillum.\r\n"
}, {
	"isActive": false,
	"price": "$3,935.09",
	"picture": "http://placeimg.com/200/200/any",
	"name": "Stephenson Patrick",
	"about": "Dolor et irure ut labore nulla aliqua excepteur laboris laboris magna amet veniam commodo nulla. Eiusmod deserunt voluptate tempor occaecat. Do cillum aliqua et proident.\r\n"
}, {
	"isActive": false,
	"price": "$2,272.78",
	"picture": "http://placeimg.com/200/200/any",
	"name": "Pearl Whitley",
	"about": "Voluptate minim nulla eu ex elit est qui. Qui Lorem eu sunt ea adipisicing Lorem adipisicing. Dolore eiusmod ea sit duis proident nostrud Lorem ea eiusmod quis eiusmod. Mollit magna ipsum pariatur tempor magna esse laboris anim consectetur aute laboris. Velit anim pariatur in veniam elit. Et nisi voluptate minim velit deserunt ea tempor labore laboris magna. Fugiat irure cillum est ea quis aute sunt et.\r\n"
}, {
	"isActive": true,
	"price": "$3,951.16",
	"picture": "http://placeimg.com/200/200/any",
	"name": "Castaneda Cunningham",
	"about": "Nisi cupidatat tempor id ex elit. Lorem sunt non labore minim sint magna fugiat culpa cillum labore ullamco velit nulla pariatur. Excepteur id nisi et do incididunt esse culpa qui laboris.\r\n"
}]

// reducer
const cats = function (state = initialState, action){
	switch(action.type){
	case 'ADD_CAT':
		console.log('adding item:' + JSON.stringify(action.item));
		state.push(action.item);

		console.log(JSON.stringify(state));
		
		// 如果直接回傳 array, 因為記憶體位址未變, react-redux 會認為物件沒有變動所以不會觸發重繪
		// 所以要建立新的 array 再回傳
		// [...state] 為 ES6 合併並產生新物件的語法
		return [...state];

	default:
		return state;
	}
}

export default cats;