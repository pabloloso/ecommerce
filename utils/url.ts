export const sanitizeStringForUrl = (string: string): string => {
  const removedPunctuationAndSymbols = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
  const removedBarBetweenSpaces = removedPunctuationAndSymbols.replace(/(?<=\s)(–)(?=\s)/g, '')
  const removedSpaces = removedBarBetweenSpaces.replace(/  +/g, ' ')

  const addLowBarInSpaces = removedSpaces.replace(/\s/g, '-')

  return addLowBarInSpaces
}