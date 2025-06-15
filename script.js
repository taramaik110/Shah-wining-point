
function enterGame() {
  const username = document.getElementById('username').value;
  if (username.trim()) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('gamePage').style.display = 'block';
    document.getElementById('greeting').innerText = 'Hi ' + username + '! Select a Box';
    createBoxes();
    document.getElementById('bgMusic').play();
  }
}

function createBoxes() {
  const boxContainer = document.getElementById('boxContainer');
  for (let i = 1; i <= 100; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.innerText = i;
    box.onclick = () => selectBox(i);
    boxContainer.appendChild(box);
  }
}

let boxSelected = false;

function selectBox(num) {
  if (boxSelected) return;
  boxSelected = true;
  document.getElementById('message').innerText = 'You selected Box #' + num + '. Best of Luck Tonight! Winner will be announced at 7 PM.';
}
