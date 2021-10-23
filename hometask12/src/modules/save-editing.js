export const saveEditing = () => {
  const table = document.querySelector('.cast-table');
  const rows = [...table.rows].slice(1);

  return rows.map((tr) => {
    const allTr = [...tr.childNodes];

    return allTr.map((td) => {
      return td.innerHTML;
    })
  }).map((item)=> {
    return {
      id: item[0],
      name: item[1],
      surname: item[2],
      role: item[3],
    }
  });

};