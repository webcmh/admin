<!-- 粒子特效组件 -->
<template>
    <vue-particles
        color="#fff"
        :particleOpacity="0.3"
        :particlesNumber="21"
        shapeType="circle"
        :particleSize="4"
        linesColor="#741299"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.6"
        :linesDistance="100"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="particles"
    ></vue-particles>
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