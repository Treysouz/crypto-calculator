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
</script>

<template>
  <UContainer class="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 max-w-3xl">
    <AppAlert
      v-if="showError"
      v-model:open="showError"
      color="error"
      title="Failed to Get Data"
      :description="error?.message"
    />
    <CryptoRateDisplay />
    <AllocationCalculator />
  </UContainer>
</template>
