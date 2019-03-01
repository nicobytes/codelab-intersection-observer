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
  const io = new IntersectionObserver(observeElement, {
    root: parent,
    threshold: .5
  });
  io.observe(element);
});