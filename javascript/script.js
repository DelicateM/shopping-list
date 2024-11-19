document.getElementById("addItemButton").addEventListener("click", addItem);
function addItem() {
  const itemInput = document.getElementById("itemInput");
  const itemText = itemInput.ariaValueMax.trim();
  if (itemText === "") {
    alert("Please enter an item.");
    return;
  }
  const shoppingList = document.getElementById("shoppingList");
  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  const completeButton = document.createElement("button");
  completeButton.textContent = "Mark as bought";
  completeButton.className = "complete-button";
  completeButton.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });
  listItem.appendChild(completeButton);
  shoppingList.appendChild(listItem);
  itemInput.value = "";
}
