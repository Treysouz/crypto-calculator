<script setup lang="ts">
const { refresh, data, isLoading } = useExchangeRates()

/** USD amount to allocate to BTC and ETH */
const investibleAssets = ref(0)
/** The amount of BTC crypto currency you would get for 70% of the amount of invested assets */
const btc = ref<string>('0.00')
/** The amount of ETH crypto currency you would get for 30% of the amount of invested assets */
const eth = ref<string>('0.00')
/** Last submitted investible assets */
const holdings = ref('$0.00')

/** Refreshes exchange rates, sets the current holdings, and calculates BTC and ETH allocations on form submit */
const onSubmit = async () => {
  holdings.value = numberToUSD(investibleAssets.value)
  await refresh()
  btc.value = formatCrypto(stringToFloat(data.value?.BTC) * (investibleAssets.value * 0.7))
  eth.value = formatCrypto(stringToFloat(data.value?.ETH) * (investibleAssets.value * 0.3))
}
</script>

<template>
  <UCard class="w-full">
    <template #header>
      <h2 class="text-base md:text-lg lg:text-xl font-medium">
        Calculator
      </h2>
    </template>
    <div class="flex flex-col gap-4 sm:gap-6 lg:gap-8">
      <UForm
        class="flex flex-col gap-4 sm:gap-6 lg:gap-8"
        @submit="onSubmit"
      >
        <CurrencyInput
          id="investible-assets"
          v-model="investibleAssets"
          description="USD amount as holdings for the 70/30 split between BTC and ETH."
          label="Investible Assets"
          name="investible-assets"
        />
        <UButton
          type="submit"
          :loading="isLoading"
          :disabled="isLoading"
          label="Calculate"
          class="flex items-center justify-center text-sm md:text-base lg:text-lg light:text-black"
        />
      </UForm>
      <USeparator />
      <div class="flex flex-col items-center gap-2 sm:gap-4 lg:gap-6">
        <LabeledOutput
          output-id="holdings"
          output-for="investible-assets"
          label="Holdings"
          output-name="holdings"
          suffix="USD"
          :value="holdings"
          :is-loading="isLoading"
        />
        <UIcon
          name="i-lucide-equal"
          class="size-5 text-primary"
        />
        <LabeledOutput
          output-id="btc"
          output-for="holdings btc-rate"
          label="70% BTC Allocation"
          description="How much BTC to buy with 70% of your investible assets at the current exchange rate."
          suffix="BTC"
          output-name="btc"
          :value="btc"
          :is-loading="isLoading"
        />
        <UIcon
          name="i-lucide-plus"
          class="size-5 text-primary"
        />
        <LabeledOutput
          output-id="eth"
          output-for="holdings eth-rate"
          label="30% ETH Allocation"
          description="How much ETH to buy with 30% of your investible assets at the current exchange rate."
          suffix="ETH"
          output-name="eth"
          :value="eth"
          :is-loading="isLoading"
        />
      </div>
    </div>
  </UCard>
</template>
