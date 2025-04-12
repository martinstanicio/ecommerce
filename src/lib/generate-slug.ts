import config from "@/payload.config";
import {
  CollectionSlug,
  FieldHook,
  getPayload,
  TypedCollection,
} from "payload";
import slugify from "slugify";

const format = (val: string) => slugify(val, { lower: true, strict: true });

async function isTitleFound(
  slug: string,
  collection: CollectionSlug,
  id: string,
) {
  const payload = await getPayload({ config });
  const titleFound = await payload.find({
    collection,
    where: {
      slug: { equals: slug },
      id: { not_equals: id },
    },
  });

  return titleFound.totalDocs > 0;
}

async function getUniqueSlug(
  slug: string,
  collection: CollectionSlug,
  id: string,
) {
  let i = 2;
  let isFound = await isTitleFound(slug, collection, id);
  const endsWithHyphenAndNumbers = /^.*-\d+$/;
  const endsWithNumbers = /\d+$/;

  while (isFound) {
    if (endsWithHyphenAndNumbers.test(slug)) {
      const match = slug.match(endsWithHyphenAndNumbers);

      if (match) {
        const trailingNumber = match[0].split("-").pop();
        if (trailingNumber) i = parseInt(trailingNumber) + 1;
      }

      slug = slug.replace(endsWithNumbers, "");
      slug += `${i}`;
    } else {
      slug += `-${i}`;
    }

    isFound = await isTitleFound(slug, collection, id);
  }

  return slug;
}

function generateSlug<TCollection extends CollectionSlug>(
  collection: TCollection,
  fieldToUse: keyof TypedCollection[TCollection],
): FieldHook {
  return function ({ originalDoc, data }) {
    const { id } = originalDoc;
    const value = data?.[fieldToUse] || originalDoc?.[fieldToUse];

    return getUniqueSlug(format(value), collection, id);
  };
}

export default generateSlug;
