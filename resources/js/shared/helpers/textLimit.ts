/**
 * Limits text to a specified number of words and adds ellipsis if needed
 * @param text - The text to limit
 * @param limit - The maximum number of words to include
 * @returns The limited text with ellipsis if truncated
 */
export default function textLimit(text: string, limit: number): string {
    if (!text) return '';

    const words = text.split(' ');

    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }

    return text;
  }