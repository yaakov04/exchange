<template>
  <div>
    <px-assets-tablet :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTablet from '@/components/PxAssetsTablet'

export default {
  name: 'Home',
  components: { PxAssetsTablet },

  data() {
    return {
      assets: ['hyar'],
    }
  },

  created() {
    api.getAssets().then((assets) => (this.assets = assets))
  },
}
</script>
