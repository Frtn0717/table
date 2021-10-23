export const markCol = () => {
  const thead = document.querySelector('.cast-table__thead');

  const mark = function (event) {
    const target = event.target;

    if (!target.classList.contains('sorted')) {
      const allThs = [...document.querySelectorAll('th')];

      allThs.map((item) => {
        if (item.classList.contains('sorted')) {
          return item.classList.toggle('sorted');
        };
      })

      target.closest('th').classList.toggle('sorted');
      
    }
  }

  thead.addEventListener('click', mark);
}