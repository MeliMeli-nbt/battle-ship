/**
 * TODO:
 * - state --> 0: chưa bắn, 1: bắn trúng, 2: bắn trượt, 3: thuộc 1 tàu đã chìm
 * - color --> 0: trắng, 1: đen
 * - isInShip --> true: nằm trong tàu, false: không nằm trong tàu
*/
const initialState = {
    boardPlayer1: [],
    boardAttack1: [],
    shipSize5OfPlayer1: [],
    shipSize4OfPlayer1: [],
    shipSize3_1OfPlayer1: [],
    shipSize3_2OfPlayer1: [],
    shipSize2OfPlayer1: [],
}
const state = Object.assign({}, initialState);

const getters = {
    boardPlayer1(state) {
        return state.boardPlayer1;
    },
    boardAttack1(state) {
        return state.boardAttack1;
    },
    shipSize5OfPlayer1(state) {
        return state.shipSize5OfPlayer1;
    },
    shipSize4OfPlayer1(state) {
        return state.shipSize4OfPlayer1;
    },
    shipSize3_1OfPlayer1(state) {
        return state.shipSize3_1OfPlayer1;
    },
    shipSize3_2OfPlayer1(state) {
        return state.shipSize3_2OfPlayer1;
    },
    shipSize2OfPlayer1(state) {
        return state.shipSize2OfPlayer1;
    },
}

const mutations = {
    initializeBoard1(state) {
        for (let row = 1; row <= 10; row++) {
            for (let col = 1; col <= 10; col++) {
                const cellId = String.fromCharCode(64 + row) + col;
                const isBlack = (row + col) % 2 === 0;
                const cell = {
                    id: cellId,
                    row: row,
                    col: col,
                    state: 0,
                    isInShip: false,
                    color: isBlack ? 1 : 0,
                };
                state.boardPlayer1.push(cell);
                state.boardAttack1.push(cell);
            }
        }
    },
    setBoardPlayler1(state, data) {

    },
    setBoardAttack1(state, data) {
        
    },
    setShipSize5OfPlayer1(state, data) { 
        state.shipSize5OfPlayer1.push(data);
    },
    setShipSize4OfPlayer1(state, data) { 
        state.shipSize4OfPlayer1.push(data);
    },
    setShipSize3_1OfPlayer1(state, data) { 
        state.shipSize3_1OfPlayer1.push(data);
    },
    setShipSize3_2OfPlayer1(state, data) { 
        state.shipSize3_2OfPlayer1.push(data);
    },
    setShipSize2OfPlayer1(state, data) { 
        state.shipSize2OfPlayer1.push(data);
        console.log('Da vao day', state.shipSize2OfPlayer1);
    },
}

const actions = {
    initializeBoard1({ commit }) {
        commit('initializeBoard1');
    }
}

export default {
    state,
    actions,
    mutations,
    getters
};