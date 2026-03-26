// Conversion constants
export const TOLA_TO_GRAMS = 11.6638038;
export const TOLA_TO_MASHA = 12;
export const MASHA_TO_GRAMS = TOLA_TO_GRAMS / TOLA_TO_MASHA;

/**
 * Convert tola to grams
 * Formula: grams = tola × 11.6638038
 */
export function tolaToGrams(tola: number): number {
  return tola * TOLA_TO_GRAMS;
}

/**
 * Convert grams to tola
 * Formula: tola = grams ÷ 11.6638038
 */
export function gramsToTola(grams: number): number {
  return grams / TOLA_TO_GRAMS;
}

/**
 * Convert tola to masha
 * Formula: masha = tola × 12
 */
export function tolaToMasha(tola: number): number {
  return tola * TOLA_TO_MASHA;
}

/**
 * Convert masha to tola
 * Formula: tola = masha ÷ 12
 */
export function mashaToTola(masha: number): number {
  return masha / TOLA_TO_MASHA;
}

/**
 * Convert masha to grams
 */
export function mashaToGrams(masha: number): number {
  return masha * MASHA_TO_GRAMS;
}

/**
 * Format number to 2 decimal places
 */
export function formatNumber(num: number): string {
  return num.toFixed(2);
}

/**
 * Parse number from user input
 */
export function parseInput(value: string): number {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
}
