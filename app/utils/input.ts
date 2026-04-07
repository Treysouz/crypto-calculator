/**
 * Formats a number as a USD currency string.
 * @param {number} value  - The numeric value to format
 * @returns {string} A string formatted as USD currency (e.g. "$1,234.56")
 */
export const numberToUSD = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

/**
 * Parses a string into a float, returning 0 for undefined or unparseable values.
 * @param {string} [value] - The string to parse
 * @returns {number} The parsed float, or 0 if the value is undefined or not a valid number
 */
export const stringToFloat = (value?: string): number => {
  return value ? parseFloat(value) || 0 : 0
}

/**
 * Formats a number as a crypto amount with 16 decimal places to match the precision of the Coinbase API exchange rates.
 * @param {number} value - The numeric value to format
 * @returns {string} A string formatted with 16 decimal places (e.g. "0.0000105000000000")
 */
export const formatCrypto = (value: number): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 16
  })
}
