<template>
  <lunchbox>
    <mesh @click="test()" position-z="-5">
      <boxGeometry />
      <meshBasicMaterial color="red"/>
    </mesh>
  </lunchbox>
</template>

<script>
export default {
  name: 'LunchboxApp',
  methods: {
    test() {
      console.log('In')
    }
  }
}
</script>

<style>

</style>