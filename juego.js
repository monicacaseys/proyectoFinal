function highlightCell(cellId) {
  let cell = document.getElementById(cellId);
  cell.style.border = "6px solid blue";
}

function unhighlightCell(cellId) {
  let cell = document.getElementById(cellId);
  cell.style.border = "";
}

const squares = document.querySelectorAll('.square');
let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;

function drawSymbol(index) {
  const square = document.getElementById(index);
  if (square.textContent === '') {
    square.textContent = currentPlayer;
    square.style.fontWeight = 'bold';
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
    checkWin();
  }
}

function checkWin() {
  const rows = [[0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  ];
  const columns = [[0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  ];
  const diagonals = [[0, 4, 8],
  [2, 4, 6],
  ];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const col = columns[i];
    if (squares[row[0]].textContent !== '' && squares[row[0]].textContent === squares[row[1]].textContent && squares[row[1]].textContent === squares[row[2]].textContent) {
      alert(`¡${currentPlayer} ha ganado! Si quieres volver a jugar te recomiendo que recargues la página`);
      return;
    }
    if (squares[col[0]].textContent !== '' && squares[col[0]].textContent === squares[col[1]].textContent && squares[col[1]].textContent === squares[col[2]].textContent) {
      alert(`¡${currentPlayer} ha ganado! Si quieres volver a jugar te recomiendo que recargues la página`);
      return;
    }
  }
  for (let i = 0; i < diagonals.length; i++) {
    const diag = diagonals[i];
    if (squares[diag[0]].textContent !== '' && squares[diag[0]].textContent === squares[diag[1]].textContent && squares[diag[1]].textContent === squares[diag[2]].textContent) {
      alert(`¡${currentPlayer} ha ganado! Si quieres volver a jugar te recomiendo que recargues la página`);
      return;
    }
  }
  if (squares[0].textContent !== '' && squares[0].textContent === squares[4].textContent && squares[4].textContent === squares[8].textContent) {
    alert(`¡${currentPlayer} ha ganado! Si quieres volver a jugar te recomiendo que recargues la página`);
    return;
  }
  if (squares[2].textContent !== '' && squares[2].textContent === squares[4].textContent && squares[4].textContent === squares[6].textContent) {
    alert(`¡${currentPlayer} ha ganado! Si quieres volver a jugar te recomiendo que recargues la página`);
   
  }
}