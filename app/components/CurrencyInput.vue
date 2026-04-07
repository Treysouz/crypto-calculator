<script setup lang="ts">
const model = defineModel<number>()

interface Props {
  /** Label for number input element */
  label: string
  /** Name of the number input element */
  name: string
  /** Description to render under the label that gives a user an idea of what the input is for */
  description: string
}

defineProps<Props>()
</script>

<template>
  <UFormField
    :label="label"
    :name="name"
    :description="description"
  >
    <UInputNumber
      v-model="model"
      :step="0.01"
      class="w-full"
      :invert-wheel-change="true"
      :default-value="0"
      :format-options="{ style: 'currency', currency: 'USD' }"
      :min="0"
    />
  </UFormField>
</template>
