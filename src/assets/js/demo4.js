const images = document.querySelectorAll('img');

const lazyImage = (entries, observer) => {
  entries
  .filter(entry => entry.isIntersecting)
  .forEach((entry) => {
    const img = entry.target;
    const src = img.getAttribute('data-lazy');

    img.setAttribute('src', src);
    observer.disconnect();
    console.log('load');
  })
}

images.forEach((img) => {
  const io = new IntersectionObserver(lazyImage);
  io.observe(img);
});