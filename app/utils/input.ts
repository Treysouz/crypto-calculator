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
