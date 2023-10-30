<template>
   
    <section>
        <div class="ship-icon"></div>
        <img class="img-bgr" src="../assets/path/logo.jpg" alt="">   
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
      </section>
</template>
<style scoped>
.img-bgr {
    width: 100%;
    height: 85vh;
  }
section {
    position: relative;
    width: 100%;
    height: 83vh;
    background-color: #5BC6C6;
    overflow: hidden;
  }
  
  section .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px; /* Điều chỉnh chiều cao của sóng */
    background: url('../assets/path/wave.png');
    background-size: 1000px 100px;
  }
  
  section .wave.wave1 {
    animation: animate 30s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: -2s;
    bottom: 0;
  }
  
  @keyframes animate {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
  }
  
  section .wave.wave2 {
    animation: animate2 15s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  
  @keyframes animate2 {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -1000px;
    }
  }
  section .wave.wave3 {
    animation: animate 30s linear infinite;
    z-index: 998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15px;
  }
  section .wave.wave4 {
    animation: animate2 5s linear infinite;
    z-index: 997;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 20px;
  }
  @keyframes animate2 {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -1000px;
    }
  }
  .ship-icon {
    position: absolute;
  top: 27%; /* Đưa ảnh lên giữa theo chiều dọc */
  left: 110%; /* Đưa ảnh về giữa theo chiều ngang */
  transform: translate(-50%, -50%); /* Dịch chuyển ảnh để giữa chính xác */
  width: 100%;
  height: 400px;
  background: url('../assets/path/btship-icon.png') no-repeat;
  animation: boatAnimation 0.5s linear infinite;
}
@keyframes boatAnimation {
    0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(5px);
  }
}
</style>