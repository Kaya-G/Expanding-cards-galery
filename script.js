const panels = document.querySelectorAll('.panel');

// NOTE: simple code - self written
const RemoveActiveClass = function () {
  for (let i = [0]; i < panels.length; i++) {
    panels[i].classList.remove('active');
  }
};

for (let i = [0]; i < panels.length; i++) {
  panels[i].addEventListener('click', function () {
    RemoveActiveClass();
    panels[i].classList.add('active');
  });
}

// NOTE: code along

// panels.forEach(panels => {
//   panels.addEventListener('click', () => {
//     removeActiveClasses();
//     panels.classList.add('active');
//   });
// });

// function removeActiveClasses() {
//   panels.forEach(panels => {
//     panels.classList.remove('active');
//   });
// }
