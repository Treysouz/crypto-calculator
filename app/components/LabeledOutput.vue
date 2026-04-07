<script setup lang="ts">
interface Props {
  /** ID for output element */
  outputId: string
  /** ID of the input element that is generating the output */
  outputFor?: string
  /** Name to be assigned to the output element */
  outputName: string
  /** Label for the output element */
  label: string
  /** Value of the output element */
  value?: string | number
  /** Whether an async process is in progress that is generating the value of the output */
  isLoading?: boolean
}

withDefaults(defineProps<Props>(), { value: '0.00', isLoading: false })
</script>

<template>
  <div class="flex flex-col text-sm md:text-base lg:text-lg gap-1 w-full">
    <label
      :for="outputId"
      class="font-medium"
    >{{ label }}</label>
    <USkeleton
      v-if="isLoading"
      class="rounded-md py-1.5 px-2.5 w-full ring ring-accented h-8 lg:h-10"
    />
    <output
      v-else
      :id="outputId"
      :for="outputFor"
      :name="outputName"
      class="rounded-md py-1.5 px-2.5 ring ring-accented h-8 lg:h-10"
    >{{ value }}</output>
  </div>
</template>
