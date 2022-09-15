<script setup lang="ts">
import { type CSSProperties, computed } from 'vue'
interface Props {
  size?: number | string
  color?: string
}
const props = defineProps<Props>()
const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color)
    return {}
  return {
    fontSize: `${props.size}px`,
    color: props.color
  }
})
</script>

<template>
  <i class="icon" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<style scoped>
.icon {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 1em;
  width: 1em;
  line-height: 1em;
  fill: currentColor;
  color: inherit;
  font-size: inherit;
}
</style>

