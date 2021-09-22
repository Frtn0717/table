import { saveEditing } from './save-editing';

export const editData = () => {
  const table = document.querySelector('.cast-table');
  const tbody = table.tBodies[0];

  tbody.ondblclick = (event) => {
    const target = event.target;
    const prevInnerHtml = target.innerHTML;
    
    if (target.classList.contains('cast-table__cell')) {
      target.contentEditable = true;
      target.focus();      
    };

    target.onkeypress = (event) => {
      const target = event.target;
      
      if (event.keyCode === 13) {
      target.contentEditable = false;
      saveEditing();
      }
    };

    target.onblur = () => {
      target.contentEditable = false;
      saveEditing();
    };

    target.onkeydown = (event) => {
      if (event.keyCode === 27) {
        target.innerHTML = prevInnerHtml;
        saveEditing();
        target.blur();
      }
    }

  };

}