<template>
  <main>
    <px-header />
    <px-assets-tablet />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxAssetsTablet from "@/components/PxAssetsTablet";

export default {
  name: "App",
  components: { PxHeader, PxAssetsTablet },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
