export const createThead = (data) => {
  const table = document.querySelector('.cast-table');
  const thead = table.tHead;

  const keys = Object.keys(data[0]);
  const tr = thead.insertRow();

  keys.map(item => {
    const newTh = document.createElement('th');
    const currentTh = tr.appendChild(newTh);
    currentTh.innerHTML = item.toUpperCase();;
  })

}

