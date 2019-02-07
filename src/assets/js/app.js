const imgs = document.querySelectorAll('img');

const lazyImgs = (img) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        observer.disconnect();
        console.log('load');
      }
    })
  });

  io.observe(img);
}
imgs.forEach(lazyImgs);