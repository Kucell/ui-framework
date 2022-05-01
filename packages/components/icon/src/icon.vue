<template>
  <i :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>


<script lang="ts" setup>
import { computed } from 'vue'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'
import { isUndefined } from '../../../utils/types'
import { addUnit } from '../../../utils/vue/style';
const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}

  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color,
  }
})
</script>
