<template>
  <div class="google-ad-container">
    <ins class="adsbygoogle"
         :style="adStyle"
         :data-ad-client="adClient"
         :data-ad-slot="adSlot"
         :data-ad-format="adFormat"
         data-full-width-responsive="true"></ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

interface Props {
  adSlot: string;
  adFormat?: string;
  adClient?: string;
}

const props = withDefaults(defineProps<Props>(), {
  adFormat: 'auto',
  adClient: 'ca-pub-2459384956460327' // 你的 AdSense 客户端 ID
});

const adStyle = {
  display: 'block'
};

onMounted(() => {
  try {
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.error('AdSense error:', e);
  }
});
</script>

<style scoped>
.google-ad-container {
  margin: 20px 0;
  text-align: center;
}
</style>
