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

const io = new IntersectionObserver(observeElement, {
  root: parent,
  threshold: .5
});

elements.forEach((element) => {
  io.observe(element);
});