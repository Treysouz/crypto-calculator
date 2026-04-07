<script setup lang="ts">
const { isLoading, lastUpdatedAt, data } = useExchangeRates()

/** A string representation of when the exchange rate data was last updated containing both the local time and date */
const lastUpdatedString = computed(() => {
  return lastUpdatedAt.value ? `${lastUpdatedAt.value.toLocaleDateString()} at ${lastUpdatedAt.value.toLocaleTimeString()}` : ''
})
</script>

<template>
  <UCard class="w-full">
    <template #header>
      <h2 class="text-base md:text-lg lg:text-xl font-medium">
        Exchange Rates Per USD
      </h2>
    </template>
    <div class="flex flex-col gap-4 sm:gap-6 lg:gap-8">
      <div class="flex flex-row flex-wrap gap-4 sm:gap-6 lg:gap-8 w-full items-end">
        <LabeledOutput
          output-id="btc-rate"
          output-name="btc-rate"
          label="BTC"
          :value="data?.BTC"
          :is-loading="isLoading"
        />
        <LabeledOutput
          output-id="eth-rate"
          output-name="eth"
          label="ETH"
          :value="data?.ETH"
          :is-loading="isLoading"
        />
      </div>
      <span
        class="text-muted text-sm"
      >Rates as of <span v-if="lastUpdatedAt">{{ lastUpdatedString }}</span></span>
    </div>
  </UCard>
</template>
