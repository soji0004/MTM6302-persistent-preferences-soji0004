function changeListStyle() {
  var listStyle = document.getElementById("listStyleSelect").value;
  document.getElementById("itemList").style.listStyleType = listStyle;
}


document.getElementById("addItemBtn").addEventListener("click", function () {
  var newItemText = document.getElementById("newItem").value;
  var newItem = document.createElement("li");
  newItem.className = "list-group-item";
  newItem.appendChild(document.createTextNode(newItemText));
  document.getElementById("itemList").appendChild(newItem);
});


document.getElementById("themeSelect").addEventListener("change", function () {
  var selectedTheme = document.getElementById("themeSelect").value;
  document.body.className = selectedTheme;
});
