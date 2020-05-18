function render (blockData) {
  let id = blockData.config.advanced.id ? ' id="' + blockData.config.advanced.id + '"' : '';
  let cssClasses = ['gallery-wrapper', blockData.config.advanced.cssClasses, 'gallery--' + blockData.config.imageAlign].filter(item => item && item.trim() !== '');
  cssClasses = cssClasses.length ? ' class="' + cssClasses.join(' ') + '"' : '';
  let images = ``;

  for (let i = 0; i < blockData.content.images.length; i++) {
    let img = blockData.content.images[i];
    let caption = '';

    if (img.caption.trim() !== '') {
      caption = `<figcaption>${img.caption}</figcaption>`;
    }

    images += `<figure class="gallery__item">
      <a href="${img.src}" data-size="${img.dimensions}">
        <img src="${img.thumbnailSrc}" height="${img.height}" width="${img.width}" alt="${img.alt}" />
      </a>
      ${caption}
    </figure>`;
  }

  let html = `
  <div ${id}${cssClasses} data-columns="${blockData.config.columns}">
    ${images}
  </div>`;

  return html;
};

module.exports = render;
