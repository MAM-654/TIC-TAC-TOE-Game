function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
};

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.children[0].children[1].value = "";
};

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playerName").trim(); // '      Hello Amin     ' => 'Hello Amin'

  if (!enteredPlayername) {
    // can also write this => if (enteredPlayername === '') {}
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  //   if (editedPlayer === 1) {
  //     player[0].name = enteredPlayername;
  //   }else{
  //     player[1].name = enteredPlayername;
  //   };

  // =======> instead of writing upster code , you can write below code <=========

  player[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
};
