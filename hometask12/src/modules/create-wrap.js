export const createWrap = () => {
  const body = document.querySelector('body');
  const newDiv = document.createElement('div');
  const newTable = document.createElement('table');

  const wrapper = body.appendChild(newDiv);
  wrapper.classList.add('wrapper');

  const table = wrapper.appendChild(newTable);
  table.classList.add('cast-table');

  const tableHeading = table.createCaption();
  tableHeading.classList.add('cast-table__heading');
  tableHeading.innerHTML = 'Terminator 2: Judgment Day Cast';

  const thead = table.createTHead();
  thead.classList.add('cast-table__thead');
}