export const createThead = (title) => {
  const thead = document.querySelector('.cast-table__thead');
  const newTr = document.createElement('tr');
  const colHeader = thead.appendChild(newTr);

  for (let i = 0; i < title.length; i++) {   
    const newTh = document.createElement('th');    
    const currentTh = colHeader.appendChild(newTh);
    currentTh.innerHTML = title[i];
  }
  
}

