export const createRows = (data) => {
  const table = document.querySelector('.cast-table');  
  const newTbody = document.createElement('tbody');
  const tbody = table.appendChild(newTbody);

  data.map((rowObject) => {
    const tr = tbody.insertRow();

    Object.keys(rowObject).map((item, index) => {
      const newTd = document.createElement('td');
      const td = tr.appendChild(newTd);
      td.classList.add('cast-table__cell');
      td.setAttribute('tabindex', 0);
      td.innerHTML = Object.values(rowObject)[index];
    })

  })
};