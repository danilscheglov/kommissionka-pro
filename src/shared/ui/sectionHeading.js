export const renderSectionHeading = (title, description = '') => `
  <div class="section-heading">
    <h2 class="section-heading__title">${title}</h2>
    ${description ? `<p class="section-heading__text">${description}</p>` : ''}
    <span class="section-heading__line" aria-hidden="true"></span>
  </div>
`
