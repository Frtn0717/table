import './styles/style.scss';
import { data } from './modules/data';
import { createThead } from './modules/create-thead';
import { createRows } from './modules/create-tbody';
import { sortList } from './modules/sort-module';
import { createWrap } from './modules/create-wrap';
import { editData } from './modules/edit-data';

(() => {
  createWrap();
  createThead(data);
  createRows(data);
  sortList();
  editData();
})();


