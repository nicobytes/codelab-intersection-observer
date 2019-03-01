
# Master

# 1-init

# 2-lazy-images

```
const images = document.querySelectorAll('img');

images.forEach(lazyImages);
```

```
const images = document.querySelectorAll('img');

images.forEach((img => {
  console.log(img);
}));
```

```
const images = document.querySelectorAll('img');

const lazyImages = (img) => {
  const io = new IntersectionObserver((entries, observer) => {
    // code 
  });

  io.observe(img);
}
images.forEach(lazyImages);
```


const images = document.querySelectorAll('img');

const lazyImages = (img) => {
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
images.forEach(lazyImages);

