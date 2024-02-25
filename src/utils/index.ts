export function calculateNumberOfLines(text: string, maxWidth: number): number {
  // Split the text into words
  const words = text.split(" ");
  let currentLineLength = 0;
  let numberOfLines = 1; // Start with one line

  for (const word of words) {
    // Check if adding this word plus a space (unless it's the first word in a line) would exceed the maxWidth
    if (
      currentLineLength + word.length + (currentLineLength > 0 ? 1 : 0) >
      maxWidth
    ) {
      // Start a new line if adding the word would exceed maxWidth
      numberOfLines++;
      currentLineLength = word.length; // Reset current line length to the length of the current word
    } else {
      // Add the word to the current line (including a space if it's not the first word)
      currentLineLength += word.length + (currentLineLength > 0 ? 1 : 0);
    }
  }

  return numberOfLines;
}
