<template>
    <router-link to="/form">
       <button class="btn-play">Play Game</button>
    </router-link>
      
  </template>
  <script setup>
  </script>
 
 <style scoped>
 .btn-play{
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
 }
  .btn-play{
     font-size: 20px;
     font-weight: 700;
     color: #fff;
     text-decoration: none;
     font-family: sans-serif;
     background-color: #6666FF;
     height: 60px;
     line-height: 60px;
     text-align: center;
     padding: 0 50px;
     z-index: 1;
     overflow: hidden;
     border-radius: 10px;
     text-transform: capitalize;
  }
  .btn-play::after, .btn-play::before{
     content: '';
     background-color: #3586ff;
     height: 50%;
     width: 0;
     position: absolute;
     transition: 0.3s cubic-bezier(.785, .135, .15, .86);
     -webkit-transition: 0.3s cubic-bezier(.785, .135, .15, .86);
     z-index: -1;
  }
  .btn-play:hover::before{
     width: 100%;
     right: 0;
     left: auto;
  }
  .btn-play::before{
     top: 0;
     left: 0;
     right: auto;
  }
  .btn-play:hover::after{
     width: 100%;
     left: 0;
     right: auto;
  }
  .btn-play::after{
     bottom: 0;
     right: 0;
     left: auto;
  }
 </style>