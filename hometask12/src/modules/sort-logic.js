import { saveEditing } from "./save-editing";

export const sort = (event) => {
  const editedData = saveEditing();
  const target = event.target;
  const table = document.querySelector('.cast-table');
  const rows = [...table.rows].slice(1);
  const sortingCriterion = target.cellIndex;
  const key = Object.keys(editedData[0])[sortingCriterion];   

  editedData.sort( (item, nextItem) => {
      if (item[key] > nextItem[key]) {
        return 1;
      } else if (item[key] < nextItem[key]) {
        return -1;
      } else {
        return 0;
      }
    });

    rows.map((item, index) => {
      [...item.childNodes].map((td, i) => {
        td.innerHTML = editedData[index][Object.keys(editedData[index])[i]]
      })
    });

}