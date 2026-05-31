export const allProductsQuery = `*[_type == "product"] | order(sortOrder asc, title asc) {
  _id,
  title,
  "slug": slug.current,
  category,
  composition,
  width,
  weight,
  application,
  moq,
  leadTime,
  features,
  tags,
  image,
  language,
  sortOrder,
  isFeatured
}`;

export const featuredProductsQuery = `*[_type == "product" && isFeatured == true] | order(sortOrder asc, title asc) {
  _id,
  title,
  "slug": slug.current,
  category,
  composition,
  width,
  weight,
  application,
  moq,
  leadTime,
  features,
  tags,
  image,
  language,
  sortOrder,
  isFeatured
}`;

export const allNewsQuery = `*[_type == "news"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  category,
  publishedAt,
  image,
  language
}`;

export const allCasesQuery = `*[_type == "caseStudy"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  challenge,
  solution,
  result,
  category,
  image,
  language
}`;
