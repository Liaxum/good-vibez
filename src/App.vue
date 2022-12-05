<script setup>
import {ref} from 'vue'
import {onBeforeRender} from 'lunchboxjs';

const rotation = ref({y: 0});
const active = ref(true);

onBeforeRender(() => {
  if (active.value) {
    rotation.value.y += 0.02;
  } else {
    rotation.value.y -= 0.02;
  }
})
</script>

<template>
  <Lunchbox>
    <directionalLight />
    <pointLight />
    <mesh ref="mesh" position-z="-5" :rotation-y="rotation.y" @click="active = !active">
      <sphereGeometry />
      <meshPhysicalMaterial>
        <textureLoader src="/map-of-earth.avif" attach="map" />
        <textureLoader src="/grayscale-map-of-earth.avif" attach="bumpMap" />
      </meshPhysicalMaterial>
    </mesh>
  </Lunchbox>
</template>
<script>
document.title = 'Good vibez';
export default {
}
</script>