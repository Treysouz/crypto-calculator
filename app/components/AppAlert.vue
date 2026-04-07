<script setup lang="ts">
interface Props {
  /** Title of the alert */
  title: string
  /** What color to render the alert as */
  color: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral' | undefined
  /** The description of the alert */
  description?: string
}

defineProps<Props>()

const open = defineModel<boolean>('open', { default: false })
</script>

<template>
  <UAlert
    v-model:open="open"
    :title="title"
    :description="description"
    :color="color"
    variant="subtle"
    close
  />
</template>
