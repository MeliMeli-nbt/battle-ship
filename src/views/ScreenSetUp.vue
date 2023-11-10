<template>
    <div class="bg-screen-set-up">
        <div class="w-[100px] h-[200px] left-[15%] absolute">
            <img class="bg-ava-player1" src="../assets/path/ava-player1.png">
        </div>
        <div class="flex justify-center pt-20">
            <Board :dataBoard="boardPlayer1" />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Board from '../components/Board.vue';
export default {
    name: 'ScreenSetUp',
    components: {
        Board
    },
    computed: {
        ...mapGetters([
            "boardPlayer1",
            "boardPlayer2"
        ])
    },
    data: function() {
        return {

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
</style>