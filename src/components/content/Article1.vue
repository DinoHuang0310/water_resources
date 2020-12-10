<template>
  <div id="article1" class="area">
    <p>長久以來，台灣在山高坡陡、河短流急等先天條件限制下，很難留住雨水，過去又因輸配管線老舊、破漏，導致漏水率動輒超過20%，使台灣多次面臨缺水窘境;如今，又遭遇56年來，首度汛期無颱風、水庫集水區降雨量大減的現象，難道，乾旱終將成為台灣難以避免的宿命?</p>
    <ul class="half">
      <li>
        <div class="imagebox" data-aos="fade-up" data-aos-duration="500" />
      </li>
      <li>
        <div class="imagebox" data-aos="fade-up" data-aos-duration="500" />
      </li>
    </ul>
    <p>中研院「台灣乾旱研究：變遷、水資源衝擊、風險認知與溝通（2016-2018）計畫」指出，台灣的自來水漏水率，每年平均達15.6%，漏水量達4.97億噸，<mark>相當於2座石門水庫水量</mark>。</p>
  </div>
</template>

<script>

export default {
}
</script>

<style>
#article1 .half li {
  width: 45%;
  margin-bottom: 1em;
}
#article1 .imagebox {
  position: relative;
  overflow: hidden;
  padding-bottom: 73%;
  background-image: url('../../assets/images/reservoir.jpg');
  background-size: cover;
  background-position: center;
}
#article1 .imagebox.aos-animate::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 70%;
  bottom: 0;
  left: 0;
  background-image: url('../../assets/images/wave.png');
  background-size: 200px 100%;
  background-repeat: repeat-x;
  opacity: .6;
}
#article1 .half li:first-child .aos-animate::after {
  animation: wave-animation 1s infinite linear, loading-animation 1.5s linear forwards;
}
#article1 .half li:nth-child(2) .aos-animate::after {
  animation: wave-animation 1s infinite linear, loading-animation 1.5s 1.5s linear forwards;
}

@keyframes wave-animation {
  0% {
    background-position: 0 bottom;
  }
  100% {
    background-position: 200px bottom;
  }
}
@keyframes loading-animation {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 100%);
  }
}

@media screen and (max-width: 480px) {
  #article1 .half li {
    width: 100%;
  }
}

</style>
