const toAttributeString = (attributes) =>
  Object.entries(attributes)
    .map(([name, value]) => `${name}="${String(value)}"`)
    .join(' ')

const renderNode = ([tag, attributes]) => `<${tag} ${toAttributeString(attributes)}></${tag}>`

export const renderLucideIcon = (
  iconNode,
  { className = '', size = 24, strokeWidth = 2, absoluteStrokeWidth = false } = {}
) => {
  const classes = ['lucide', className].filter(Boolean).join(' ')

  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="${strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
      ${absoluteStrokeWidth ? 'vector-effect="non-scaling-stroke"' : ''}
      class="${classes}"
      aria-hidden="true"
    >
      ${iconNode.map(renderNode).join('')}
    </svg>
  `
}
