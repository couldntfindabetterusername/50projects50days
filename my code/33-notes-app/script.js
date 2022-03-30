const addBtn = document.getElementById("add-note");
const notesWrapper = document.getElementById("wrapper");

addBtn.addEventListener("click", () => {
  const note = document.createElement("div");
  note.classList.add("note");

  const upperSec = document.createElement("div");
  upperSec.classList.add("upper-section");

  const saveBtn = document.createElement("button");
  saveBtn.classList.add("save");
  saveBtn.append(document.createTextNode("Save"));

  saveBtn.addEventListener("click", () => {
    textarea.readOnly = textarea.readOnly ? false : true;
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.append(document.createTextNode("Delete"));

  deleteBtn.addEventListener("click", () => {
    note.remove();
  });

  const textarea = document.createElement("textarea");
  textarea.name = "note";

  upperSec.append(saveBtn);
  upperSec.append(deleteBtn);

  note.append(upperSec);
  note.append(textarea);

  notesWrapper.append(note);
});
