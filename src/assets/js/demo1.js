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

const io = new IntersectionObserver(observeElement, {
  root: parent,
  threshold: 0
});

elements.forEach((element) => {
  io.observe(element);
});