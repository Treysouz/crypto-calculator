<script setup lang="ts">
const { refresh, data, isLoading } = useExchangeRates()

/** USD amount to allocate to BTC and ETH */
const investibleAssets = ref(0)
/** The amount of BTC crypto currency you would get for 70% of the amount of invested assets  */
const btc = computed(() => formatCrypto(stringToFloat(data.value?.BTC) * (investibleAssets.value * 0.7)))
/** The amount of ETH crypto currency you would get for 30% the amount of invested assets  */
const eth = computed(() => formatCrypto(stringToFloat(data.value?.ETH) * (investibleAssets.value * 0.3)))

/** On investibleAssets update, refresh the exchange rate data to get the most up to date rates */
watch(investibleAssets, async () => {
  await refresh()
})
</script>

<template>
  <UCard class="w-full">
    <template #header>
      <h2 class="text-base md:text-lg lg:text-xl font-medium">
        Calculator
      </h2>
    </template>
    <UForm class="flex flex-col gap-4 sm:gap-6 lg:gap-8">
      <CurrencyInput
        id="investible-assets"
        v-model="investibleAssets"
        description="USD amount as holdings for the 70/30 split between BTC and ETH."
        label="Investible Assets"
        name="investible-assets"
      />
      <USeparator
        icon="i-lucide-equal"
        :ui="{ icon: 'text-primary' }"
      />
      <LabeledOutput
        output-id="btc"
        output-for="investible-assets"
        label="70% BTC Allocation"
        description="How much BTC to buy with 70% of your investible assets at the current exchange rate."
        suffix="BTC"
        output-name="btc"
        :value="btc"
        :is-loading="isLoading"
      />
      <LabeledOutput
        output-id="eth"
        output-for="investible-assets"
        label="30% ETH Allocation"
        description="How much ETH to buy with 30% of your investible assets at the current exchange rate."
        suffix="ETH"

        output-name="eth"
        :value="eth"
        :is-loading="isLoading"
      />
    </UForm>
  </UCard>
</template>
