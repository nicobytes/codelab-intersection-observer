
![Imgur](https://i.imgur.com/Mn0ub91.png)

# Master

All demos

# 1. Init

Init for project

```
npm run start
```

# 2. Demo-1

```
const elements = document.querySelectorAll('#wrapper > div');
const output = document.getElementById('output');
const parent = document.getElementById('wrapper');

const observeElement = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const newText = `${entry.target.innerText} => ${entry.intersectionRatio}`
      output.innerText = newText;
    }
  })
}

const observer = new IntersectionObserver(observeElement, {
  root: parent,
  threshold: 0
});

elements.forEach((element) => {
  observer.observe(element);
});
```

# 3. Demo-2

```
const elements = document.querySelectorAll('#wrapper > div');
const parent = document.getElementById('wrapper');

const observeElement = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      console.log('load');
    }
  })
}

const observer = new IntersectionObserver(observeElement, {
  root: parent,
  threshold: .5
});

elements.forEach((element) => {
  observer.observe(element);
});
```

# 4. Demo-3

```
const elements = document.querySelectorAll('#wrapper > div');
const parent = document.getElementById('wrapper');

const observeElement = (entries, observer) => {
  entries
  .filter(entry => entry.isIntersecting)
  .forEach((entry) => {
    entry.target.classList.add('show');
    console.log('load');
    observer.disconnect();
  })
}

elements.forEach((element) => {
  const observer = new IntersectionObserver(observeElement, {
    root: parent,
    threshold: .5
  });
  observer.observe(element);
});
```

# 5. Demo-4 Lazy Images

```
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
  const observer = new IntersectionObserver(lazyImage);
  observer.observe(img);
});
```