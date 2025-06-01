function formatTextWithSpans(text) {
  return text
    .split('\n')
    .filter(line => line.trim() !== '') 
    .map(line => `<span>${line.trim()}</span>`)
    .join('\n');
}

export { formatTextWithSpans }