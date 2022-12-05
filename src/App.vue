<script setup>
import {ref} from 'vue'
import {onBeforeRender} from 'lunchboxjs';

const rotation = ref({y: 0});

onBeforeRender(() => {
  rotation.value.y += 0.02;
})
</script>

<template>
  <Lunchbox>
    <directionalLight />
    <pointLight />
    <mesh @click="test()" position-z="-5" :rotation-y="rotation.y">
      <sphereGeometry />
      <meshPhysicalMaterial>
        <textureLoader src="../public/map-of-earth.avif" attach="map" />
        <textureLoader src="../public/grayscale-map-of-earth.avif" attach="bumpMap" />
      </meshPhysicalMaterial>

    </mesh>
  </Lunchbox>
</template>
<script>
document.title = 'Good vibez';
</script>