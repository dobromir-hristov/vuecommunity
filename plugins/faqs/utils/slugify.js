export default function slugify(input) {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/([^\w]|\s)+/g, '-')
    .replace(/-$/g, '')
}
