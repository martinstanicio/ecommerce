/**
 * Utility function to check if an object is populated.
 *
 * If the object is unpopulated, it is therefore a string, which represents its
 * ID. It is likely that the depth is not set high enough for it to be auto-
 * populated.
 */
export function isPopulated<T extends object>(item: string | T) {
  return typeof item !== "string";
}

/**
 * Utility function to check if a list of objects is populated.
 *
 * If the list is unpopulated, it is therefore a list of strings, which
 * represent their IDs. It is likely that the depth is not set high enough for
 * them to be auto-populated.
 */
export function isPopulatedList<T extends object>(list: (string | T)[]) {
  return list.every(isPopulated);
}
