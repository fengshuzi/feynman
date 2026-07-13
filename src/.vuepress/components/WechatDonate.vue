<template>
  <div class="wechat-donate">
    <div class="wechat-donate-inner">
      <span class="wechat-donate-icon">☕</span>
      <span class="wechat-donate-text">感谢支持 · 欢迎交流（请喝咖啡 / 加好友定制化开发）</span>
      <button class="wechat-donate-btn" @click="showQr = !showQr">
        {{ showQr ? '收起' : '展开二维码' }}
      </button>
    </div>

    <Transition name="donate-fade">
      <div v-if="showQr" class="wechat-donate-qr">
        <img
          src="/assets/wechat-support.jpg"
          alt="请喝咖啡 / 加好友定制化开发二维码"
          class="wechat-donate-thumb"
          @click="zoomed = true"
        />
        <p class="wechat-donate-hint">点击图片可放大查看</p>
      </div>
    </Transition>

    <Teleport to="body">
      <Transition name="zoom-fade">
        <div v-if="zoomed" class="wechat-donate-lightbox" @click="zoomed = false">
          <img
            src="/assets/wechat-support.jpg"
            alt="请喝咖啡 / 加好友定制化开发二维码"
            class="wechat-donate-lightbox-img"
          />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const showQr = ref(true);
const zoomed = ref(false);

watch(zoomed, (val) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = val ? 'hidden' : '';
  }
});
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
  gap: 8px;
}

.wechat-donate-thumb {
  width: 100%;
  max-width: 360px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  cursor: zoom-in;
  transition: transform 0.2s;
}

.wechat-donate-thumb:hover {
  transform: scale(1.02);
}

.wechat-donate-hint {
  font-size: 0.8rem;
  color: var(--text-color-light, #aaa);
  margin: 0;
}

/* 灯箱 */
.wechat-donate-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  cursor: zoom-out;
}

.wechat-donate-lightbox-img {
  max-width: 96vw;
  max-height: 92vh;
  border-radius: 12px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
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

/* 灯箱动画 */
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: opacity 0.2s;
}
.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
}
</style>
