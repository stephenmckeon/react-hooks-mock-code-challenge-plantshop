export const searchByAttr = (collection, search, attribute) => {
  return collection.filter((object) => {
    const objectValue = object[attribute].toLowerCase()

    return objectValue.startsWith(search.toLowerCase())
  })
}
