const list = document.querySelectorAll('.items li');

list.forEach((listItem) => {
  listItem.addEventListener('click', () => {
    list.forEach(li => li.classList.remove('active'));

    listItem.classList.add('active');
  });
});
