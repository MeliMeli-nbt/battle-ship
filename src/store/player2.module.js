/**
 * TODO:
 * - state --> 0: chưa bắn, 1: bắn trúng, 2: bắn trượt, 3: thuộc 1 tàu đã chìm
 * - color --> 0: trắng, 1: đen
 * - isInShip --> true: nằm trong tàu, false: không nằm trong tàu
*/
const initialState = {
    boardPlayer2: [],
    boardAttack2: [],
    shipSize5OfPlayer2: [],
    shipSize4OfPlayer2: [],
    shipSize3_1OfPlayer2: [],
    shipSize3_2OfPlayer2: [],
    shipSize2OfPlayer2: [],
}
const state = Object.assign({}, initialState);

const getters = {
    boardPlayer2(state) {
        return state.boardPlayer2;
    },
    boardAttack2(state) {
        return state.boardAttack2;
    },
    shipSize5OfPlayer2(state) {
        return state.shipSize5OfPlayer2;
    },
    shipSize4OfPlayer2(state) {
        return state.shipSize5OfPlayer2;
    },
    shipSize3_1OfPlayer2(state) {
        return state.shipSize5OfPlayer2;
    },
    shipSize3_2OfPlayer2(state) {
        return state.shipSize5OfPlayer2;
    },
    shipSize2OfPlayer2(state) {
        return state.shipSize5OfPlayer2;
    },
}

const mutations = {
    initializeBoard2(state) {
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
                state.boardPlayer2.push(cell);
                state.boardAttack2.push(cell);
            }
        }
    },
    setBoardPlayler2(state, data) {

    },
    setBoardAttack2(state, data) {

    },
}

const actions = {
    initializeBoard2({ commit }) {
        commit('initializeBoard2');
    }
}

export default {
    state,
    actions,
    mutations,
    getters
};