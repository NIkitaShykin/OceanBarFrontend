export const parseString = (arr: []) => {
  const string = arr
    .filter((el: {name: string; isAdded: boolean}) => {
      if (el.isAdded) {
        return el
      }
    })
    .map((el: {name: string; isAdded: boolean}) => el.name)
  return `"${string.join(';')}"`
}
