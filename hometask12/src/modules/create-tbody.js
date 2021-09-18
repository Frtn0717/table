export const createRows = (data) => {
  const table = document.querySelector('.cast-table');
  
  const newTbody = document.createElement('tbody');
  const tbody = table.appendChild(newTbody);

  for (let i = 0; i < data[0].length; i++) {
    const newTr = document.createElement('tr');
    const currentTr = tbody.appendChild(newTr);

    for (let j = 0; j <= data.length; j++) {
      const newTd = document.createElement('td');
      const currentTd = currentTr.appendChild(newTd);

      if (j === 0) {
        currentTd.innerHTML = i + 1;
      } else {
        currentTd.innerHTML = data[j-1][i];
      }

    }
  }
};