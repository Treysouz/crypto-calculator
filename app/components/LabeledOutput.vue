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
  /** Description of the output */
  description?: string
  /** Text to render in the end of the output box */
  suffix?: string
  /** Value of the output element */
  value?: string | number
  /** Whether an async process is in progress that is generating the value of the output */
  isLoading?: boolean
}

const props = withDefaults(defineProps<Props>(), { value: '0.00', isLoading: false })

const descriptionId = `${props.outputId}-description`
</script>

<template>
  <div class="flex flex-col text-sm md:text-base lg:text-lg gap-1 w-full">
    <div>
      <label
        :for="outputId"
        class="font-medium"
      >{{ label }}</label>
      <p
        v-if="description"
        :id="descriptionId"
        class="text-muted text-sm"
      >
        {{ description }}
      </p>
    </div>
    <USkeleton
      v-if="isLoading"
      class="rounded-md py-1.5 px-2.5 ring ring-accented h-8 lg:h-10 w-full"
    />
    <output
      v-else
      :id="outputId"
      :for="outputFor"
      :name="outputName"
      :aria-describedby="description ? descriptionId : undefined"
      class="rounded-md py-1.5 px-2.5 ring ring-accented h-8 lg:h-10 w-full flex flex-row justify-between space-x-4"
    ><span>{{ value }}</span> <span
      v-if="suffix"
      class="font-medium"
    >{{ suffix }}</span></output>
  </div>
</template>
