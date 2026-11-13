<template>
  <transition name="fade">
    <div v-if="isLoading" class="loader-overlay">
     <h1 class="title-lg">{{ progress }}%</h1>
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </transition>

  <div :class="{ 'content-hidden': isLoading }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      progress: 0,
      assetsTracked: 0,
      totalAssets: 0
    };
  },
  mounted() {
    this.trackInternetAssets();
  },
  methods: {
    trackInternetAssets() {
      // Find all heavy elements that need downloading from the internet
      const images = Array.from(document.querySelectorAll('img'));
      const allAssets = [...images];

      this.totalAssets = allAssets.length;

      // If there are no assets to wait for, jump straight to 100%
      if (this.totalAssets === 0) {
        this.progress = 100;
        setTimeout(() => this.isLoading = false, 400);
        return;
      }

      allAssets.forEach((asset) => {
        // If an asset is already cached/loaded by the browser
        if (asset.complete || asset.readyState >= 4) {
          this.updateProgress();
        } else {
          // Listen for when it finishes downloading over the internet
          asset.addEventListener('load', this.updateProgress);
          asset.addEventListener('error', this.updateProgress); // skip broken links
        }
      });
    },
    updateProgress() {
      this.assetsTracked++;
      // Calculate real mathematical percentage
      this.progress = Math.round((this.assetsTracked / this.totalAssets) * 100);

      if (this.assetsTracked >= this.totalAssets) {
        setTimeout(() => {
          this.isLoading = false;
        }, 500); // Small delay so user sees 100% briefly
      }
    }
  }
};
</script>

<style scoped>
/* Progress Bar Styles */
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--primary-950);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: white;
  font-family: sans-serif;
}

.progress-bar-container {
  width: 350px;
  height: 6px;
  background: var(--primary-50);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--primary-100);
  transition: width 0.5s ease-out;
}

.content-hidden {
  opacity: 0;
  height: 100vh;
  overflow: hidden;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>