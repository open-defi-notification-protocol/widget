<template>

  <button :class="$style.button" :style="cssVars" @click="showODNPPopup">
    <slot v-if="$slots.content" name="content"/>
    <div v-else style="display: flex; align-items: center;">
      <img src="https://tinypng.com/web/output/yhg0hk7fqknevvgxn1gf8wzmc0qk01vy/Group%2035207%20(3).png"
           style=" margin-right: 0.8rem;">
      Free Mobile Alert
    </div>
  </button>

</template>

<script>

import ODNP from "../index"

export default {
  name: "ODNPButton",
  props: {
    walletAddress: {
      type: String,
      required: true
    },
    projectId: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: "#FF5000"
    },
    fgColor: {
      type: String,
      default: "#fff"
    },
    bgColorHover: {
      type: String,
      default: "#ff8047"
    },
    hPadding: {
      type: Number,
      default: 2
    },
    vPadding: {
      type: Number,
      default: 0.6
    },
    borderRadius: {
      type: Number,
      default: 2
    },
    invert: {
      type: Boolean,
      default: false
    }
  },
  mounted() {

    this.ODNP = new ODNP();
    this.ODNP.init();

  },
  methods: {

    showODNPPopup() {

      this.ODNP.show(
          this.walletAddress,
          this.projectId
      );

    }

  },
  computed: {
    cssVars() {
      return {
        '--bg-color': this.invert ? this.fgColor : this.bgColor,
        '--bg-color-hover': this.invert ? this.fgColor : this.bgColorHover,
        '--fg-color-hover': this.invert ? this.bgColorHover : this.fgColor,
        '--fg-color': this.invert ? this.bgColor : this.fgColor,
        '--borderRadius': this.borderRadius + 'rem',
        '--v-padding': this.hPadding + 'rem',
        '--h-padding': this.vPadding + 'rem'
      }
    }
  }
}

</script>

<style scoped lang="css" module>

.button {
  box-shadow: rgba(0, 0, 0, 0.3) 0 0.1rem 0.5rem 0;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: var(--borderRadius);
  border: none;
  color: var(--fg-color);
  background-color: var(--bg-color);
  padding: var(--h-padding) var(--v-padding);
}

.button:hover {
  background-color: var(--bg-color-hover);
  color: var(--fg-color-hover);
}

.button:active {
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 0.2rem 0;
  background-color: var(--bg-color);
  color: var(--fg-color);
}

</style>

