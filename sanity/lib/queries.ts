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

export const activeDownloadItemsQuery = `*[_type == "downloadItem" && isActive == true] | order(sortOrder asc, title asc) {
  _id,
  title,
  description,
  category,
  fileType,
  fileUrl,
  language,
  sortOrder,
  isActive
}`;

export const activeFaqItemsQuery = `*[_type == "faqItem" && isActive == true] | order(sortOrder asc, question asc) {
  _id,
  question,
  answer,
  category,
  language,
  sortOrder,
  isActive
}`;

export const activeContactInfoQuery = `*[_type == "contactInfo" && isActive == true] | order(_updatedAt desc) [0] {
  _id,
  companyName,
  email,
  phone,
  whatsapp,
  wechat,
  address,
  mapEmbedUrl,
  businessHours,
  language,
  isActive
}`;

export const activeHomepageContentQuery = `*[_type == "homepageContent" && isActive == true] | order(_updatedAt desc) {
  _id,
  heroTitle,
  heroSubtitle,
  primaryButtonText,
  secondaryButtonText,
  finalCtaTitle,
  finalCtaSubtitle,
  language,
  isActive
}`;
