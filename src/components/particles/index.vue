<!-- 粒子特效组件 -->
<template>
  <vue-particles
    color="#fff"
    :particle-opacity="0.3"
    :particles-number="21"
    shape-type="circle"
    :particle-size="4"
    lines-color="#741299"
    :lines-width="1"
    :line-linked="true"
    :line-opacity="0.6"
    :lines-distance="100"
    :move-speed="2"
    :hover-effect="true"
    hover-mode="grab"
    :click-effect="true"
    click-mode="push"
    class="particles"
  />
</template>
<style lang="scss" scoped>
.particles {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
}
</style>
