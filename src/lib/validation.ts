/**
 * Validation utilities for form inputs.
 */

/**
 * Validates a 10-digit Indian mobile number.
 * Accepts digits, optionally prefixed by +91 or 0, with or without spaces/dashes.
 */
export function isValidIndianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  // Matches 10 digits starting with 6, 7, 8, or 9 (with optional +91 or 0 prefix)
  const regex = /^(?:\+91|0)?[6-9]\d{9}$/;
  return regex.test(cleaned);
}

/**
 * Clean phone number to 10 digits without prefix.
 */
export function normalizePhoneNumber(phone: string): string {
  const cleaned = phone.replace(/[\s\-()+]/g, '');
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return cleaned.slice(2);
  }
  if (cleaned.startsWith('0') && cleaned.length === 11) {
    return cleaned.slice(1);
  }
  return cleaned;
}

/**
 * Validates non-empty required text.
 */
export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

