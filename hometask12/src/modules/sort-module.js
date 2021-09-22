import { markCol } from './mark-col';
import { sort } from './sort-logic';

export const sortList = () => {
  const thead = document.querySelector('.cast-table__thead');

  markCol();  

  thead.onclick = sort;
}