let localSotrageNotes = JSON.parse(localStorage.getItem("notes")) || [];

const notes = (notes = localSotrageNotes, action) => {
  switch (action.type) {
  case action.type == "getNotes":
    ""
    break;
  case action.type == "add":
    1
    break;
  case action.type == "remove":
    2
    break;
  default: 
    3
    break;
  }
}

export default notes;