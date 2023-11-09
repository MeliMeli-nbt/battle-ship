import Vuex from "vuex";
//import cac module
import player1 from "./player1.module.js"
import player2 from "./player2.module.js"


export default new Vuex.Store({
	modules: {
		player1,
		player2
	}
});