<script setup lang="ts">
const { error } = useExchangeRates()

/** Whether to show error App Alert component */
const showError = ref<boolean>(false)

/** Watch the error returned from useExchangeRates(). If there is an error value, show the App Alert component */
watch(error, () => {
  if (error.value) {
    showError.value = true
  }
})
// 500285.665714647
// 500006.375000017
</script>

<template>
  <UContainer class="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8">
    <AppAlert
      v-if="showError"
      v-model:open="showError"
      color="error"
      title="Failed to Get Data"
      :description="error?.message"
    />
    <div class="flex flex-row gap-4 sm:gap-6 lg:gap-8 flex-wrap md:flex-nowrap max-w-4xl">
      <CryptoRatesDisplay />
      <AllocationCalculator />
    </div>
  </UContainer>
</template>
