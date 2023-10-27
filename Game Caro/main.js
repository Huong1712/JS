//get value row and cell of box when click it
var table = document.getElementById("click"), rIndex, cIndex;
var player = "X";
var resultPlayerX = [];
var resultPlayerY = [];
for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].onclick = function (event) {
            rIndex = this.parentElement.rowIndex;
            cIndex = this.cellIndex;
            console.log(event);
            event.target.innerHTML = player;
            if (player === "X") {
                player = "O"
                resultPlayerX.push({ x: rIndex + 1, y: cIndex + 1 })
            } else {
                player = "X"
                resultPlayerY.push({ x: rIndex + 1, y: cIndex + 1 })
            }
            console.log(resultPlayerX);
            console.log(resultPlayerY);
        }
    }
}

function checkWin() {
    if (resultPlayerX((rIndex[0] === rIndex[1] === rIndex[2]) || (cIndex[0] === cIndex[1] === cIndex[2])
        || (rIndex[0] === cIndex[0] && rIndex[1] === cIndex[1] && rIndex[2] === cIndex[2]))) {
        alert('Player X Win!');
    } else if (resultPlayerY((rIndex[0] === rIndex[1] === rIndex[2]) || (cIndex[0] === cIndex[1] === cIndex[2])
        || (rIndex[0] === cIndex[0] && rIndex[1] === cIndex[1] && rIndex[2] === cIndex[2]))) {
        alert('Player Y Win!');
    }
}




