<template>
  <div class="wechat-donate">
    <div class="wechat-donate-inner">
      <span class="wechat-donate-icon">☕</span>
      <span class="wechat-donate-text">如果这篇文章对你有帮助，欢迎请作者喝杯咖啡</span>
      <button class="wechat-donate-btn" @click="showQr = !showQr">
        {{ showQr ? '收起' : '微信打赏' }}
      </button>
    </div>
    <Transition name="donate-fade">
      <div v-if="showQr" class="wechat-donate-qr">
        <img src="/assets/wechat-donate.jpg" alt="微信打赏二维码" width="180" />
        <p class="wechat-donate-hint">微信扫码打赏，感谢支持 🙏</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const showQr = ref(false);
</script>

<style scoped>
.wechat-donate {
  margin: 48px 0 24px;
  border-top: 1px solid var(--border-color, #e8e8e8);
  padding-top: 24px;
}

.wechat-donate-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.wechat-donate-icon {
  font-size: 1.3rem;
}

.wechat-donate-text {
  flex: 1;
  font-size: 0.9rem;
  color: var(--text-color-light, #888);
  min-width: 0;
}

.wechat-donate-btn {
  padding: 6px 18px;
  border-radius: 20px;
  border: 1.5px solid #07c160;
  background: transparent;
  color: #07c160;
  font-size: 0.85rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s;
}

.wechat-donate-btn:hover {
  background: #07c160;
  color: #fff;
}

.wechat-donate-qr {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.wechat-donate-qr img {
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.wechat-donate-hint {
  font-size: 0.82rem;
  color: var(--text-color-light, #aaa);
  margin: 0;
}

/* 展开/收起动画 */
.donate-fade-enter-active,
.donate-fade-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.donate-fade-enter-from,
.donate-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
