<template>
    <div class="bg-screen-set-up flex justify-around">
        <div class="w-[100px] h-[100px] left-[15%]">
            <img class="bg-ava-player1" src="../assets/path/ava-player1.png">
        </div>
        <div class="flex justify-center pt-20">
            <div class="grid grid-rows-10 grid-flow-col h-[470px] w-[472px] border-2 border-[#064c81] p-1 backgroud-board">
                <template v-for="(cell, index) in boardPlayer1" :key="index">
                    <div class="grid grid-rows-3 grid-flow-col h-[46px] w-[46px] border-[0.5px] relative border-[#789bb9] hover:bg-cyan-500 cursor-pointer"
                        @click="clickCell(cell)" :id="cell.id">
                        <template v-for="i in 9" :key="i">
                            <div class="h-[15px] w-[15px] border-[0.5px] border-gray-300 relative"></div>
                        </template>
                    </div>
                </template>
            </div>
        </div>
        <div class=" flex flex-col justify-center w-[200px] h-[100vh] bg-orange-700">
            <div class="ship-size-2 h-[100px] cursor-pointer" @click="selectShip('ship-size-2')">
            </div>
            <div class="ship-size-3-1 h-[150px] cursor-pointer" @click="selectShip('ship-size-3-1')">
            </div>
            <div class="ship-size-3-2 h-[150px] cursor-pointer" @click="selectShip('ship-size-3-2')">
            </div>
            <div class="ship-size-4 h-[180px] cursor-pointer" @click="selectShip('ship-size-4')">
            </div>
            <div class="ship-size-5 h-[100px] cursor-pointer" @click="selectShip('ship-size-5')">
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Board from '../components/Board.vue';
import store from '../store/store.js';
export default {
    name: 'ScreenSetUp',
    components: {
        Board
    },
    data: function() {
        return {
            player1: true,
            isShip2: false,
            isShip3_1: false,
            isShip3_2: false,
            isShip4: false,
            isShip5: false
        }
    },
    computed: {
        ...mapGetters([
            "boardPlayer1",
            "boardPlayer2",
            "shipSize2OfPlayer1"
        ])
    },
    watch: {
        shipSize2OfPlayer1: function(val) {
            
        }
    },
    methods: {
        selectShip(shipSize) {
            if (shipSize == 'ship-size-2') {
                this.selectNewShip;
                this.isShip2 = true;
            } else if (shipSize == 'ship-size-3-1') {
                this.selectNewShip;
                this.isShip3_1 = true;
            } else if (shipSize == 'ship-size-3-2') {
                this.selectNewShip;
                this.isShip3_1 = true;
            } else if (shipSize == 'ship-size-4') {
                this.selectNewShip;
                this.isShip3_1 = true;
            } else if (shipSize == 'ship-size-5') {
                this.selectNewShip;
                this.isShip3_1 = true;
            }
        },
        selectNewShip() {
            this.isShip2   = false;
            this.isShip3_1 = false;
            this.isShip3_2 = false;
            this.isShip4   = false;
            this.isShip5   = false;
        },
        clickCell(data) {
            if (this.isShip2) {
                console.log(data);
                store.commit('setShipSize2OfPlayer1', data);
            } else if (this.isShip3_1) {
                store.commit('setShipSize3_1OfPlayer1', data);
            } else if (this.isShip3_2) {
                store.commit('setShipSize3_2OfPlayer1', data);
            } else if (this.isShip4) {
                store.commit('setShipSize4OfPlayer1', data);
            } else if (this.isShip5) {
                store.commit('setShipSize5OfPlayer1', data);
            }
        }
    }
}
</script>

<style scoped>
.bg-screen-set-up {
    background: url(../assets/path/screen-set-up.jpeg) center/cover no-repeat;
    width: 100%;
    height: 100vh;
}
.bg-ava-player1 {
    background-size: cover;
    background: no-repeat;
}
.ship-size-2 {
    background: url(../assets/path/ship-2-size.png) center/cover no-repeat;
    background-size: 50px;
    transform: rotate(270deg);
}
.ship-size-3-1 {
    background: url(../assets/path/ship-3-1-size.png) center/cover no-repeat;
    background-size: 50px;
    transform: rotate(270deg);
}
.ship-size-3-2 {
    background: url(../assets/path/ship-3-2-size.png) center/cover no-repeat;
    background-size: 50px;
    transform: rotate(270deg);
}
.ship-size-4 {
    background: url(../assets/path/ship-4-size.png) center/cover no-repeat;
    background-size: 50px;
    transform: rotate(270deg);
}
.ship-size-5 {
    background: url(../assets/path/ship-5-size.png) center/cover no-repeat;
    background-size: 200px;
}
.backgroud-board {
	background-color: rgba(224 , 232, 242, 0.7);
}
.active-cell {
    background-color: rgb(6 182 212);
}
</style>