var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var buttonDelete = document.getElementsByClassName("dlt-btn");

//add event listener to first 6 btns in HTML file
for(i=0;i<buttonDelete.length;i++){
	buttonDelete[i].addEventListener("click", removeParent, false);
}

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var createBtn = document.createElement("button");
	createBtn.innerHTML = "Delete";
	createBtn.onclick=removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML=li.innerHTML+" ";
	li.appendChild(createBtn);
	

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);