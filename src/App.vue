<template>
  <Renderer ref="renderer" :orbitCtrl="{autoRotate: true}" resize="window">
    <Camera :position="{ z: 6}"/>
    <Scene>
      <PointLight color="white" :position="{z: 50}"/>
      <PointLight color="white" :position="{z: -50}"/>
      <PointLight color="white" :position="{x: 50}"/>
      <PointLight color="white" :position="{x: -50}"/>

      <Sphere ref="mesh" :radius="2.5" :width-segments="500" :height-segments="500" >
        <StandardMaterial :props="{displacementScale: 0.1}">
          <Texture src="/worldColour.5400x2700.jpg" />
          <Texture src="/srtm_ramp2.world.5400x2700.jpg" name="displacementMap" />
        </StandardMaterial>
      </Sphere>
    </Scene>
  </Renderer>
</template>
<script>
document.title = 'Good vibez';

export default {
  mounted() {
    const renderer = this.$refs.renderer;
    const box = this.$refs.box;

    renderer.onBeforeRender(() => {
    })
  },
  data: () => ({
    width: window.innerWidth,
    heiht: window.innerHeight
  }),
}
</script>
<style>
body, html {
  margin: 0;
}
</style>