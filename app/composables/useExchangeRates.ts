interface ExchangeRatesResponse {
  /** The data that the exchange rate endpoint responds with */
  data: {
    /** The type of currency that the exchange rates represent */
    currency: string
    /** A map of crypto currency codes to their exchange rates per 1 USD */
    rates: Record<string, string>
  }
}

/** Date in which the exchange rates data was last obtained */
const lastUpdatedAt = ref<Date | null>(null)

/**
 * Fetches the latest crypto exchange rates relative to USD from the Coinbase API.
 * @returns {Promise<Record<string, string>>} A map of crypto currency codes to their exchange rates per 1 USD
 */
const getExchangeRates = async (): Promise<Record<string, string>> => {
  const response = await $fetch<ExchangeRatesResponse>(
    'https://api.coinbase.com/v2/exchange-rates?currency=USD'
  )

  const rates = response.data.rates

  return rates
}

/** Composable for getting exchange rates data */
export const useExchangeRates = () => {
  const query = useQuery({
    key: ['exchange-rates'],
    query: async () => {
      const results = await getExchangeRates()
      lastUpdatedAt.value = new Date()
      return results
    },
    /** Stale time set to 5 seconds to balance freshness of data with avoiding unnecessary calls */
    staleTime: 5000,
    refetchOnWindowFocus: true
  })

  return { ...query, lastUpdatedAt }
}
