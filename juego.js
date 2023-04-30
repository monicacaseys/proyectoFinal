function highlightCell(cellId) {
  let cell = document.getElementById(cellId);
  cell.style.border = "6px solid blue";
}

function unhighlightCell(cellId) {
  let cell = document.getElementById(cellId);
  cell.style.border = "";
}

const squares = document.querySelectorAll('.square');
let symbols = ['', '', '', '', '', '', '', '', ''];

function drawSymbol(index) {
  const square = document.getElementById(index);
  if (symbols[index] === '') {
    square.textContent = '♘';
    square.style.fontWeight = 'bold';
    symbols[index] = '♘';
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
    if (symbols[row[0]] !== '' && symbols[row[0]] === symbols[row[1]] && symbols[row[1]] === symbols[row[2]]) {
      alert('¡Has ganado! Si quieres volver a juagr te recomiendo que recargues la pagina');
      return;
    }
    if (symbols[col[0]] !== '' && symbols[col[0]] === symbols[col[1]] && symbols[col[1]] === symbols[col[2]]) {
      alert('¡Has ganado!Si quieres volver a juagar te recomiendo que recargues la pagina');
      return;
    }
  }
  for (let i = 0; i < diagonals.length; i++) {
    const diag = diagonals[i];
    if (symbols[diag[0]] !== '' && symbols[diag[0]] === symbols[diag[1]] && symbols[diag[1]] === symbols[diag[2]]) {
      alert('¡Has ganado!Si quieres volver a juagar te recomiendo que recargues la pagina');
      return;
    }
  }
  if (symbols[0] !== '' && symbols[0] === symbols[4] && symbols[4] === symbols[8]) {
    alert('¡Has ganado!Si quieres volver a juagar te recomiendo que recargues la pagina');
    return;
  }
  if (symbols[2] !== '' && symbols[2] === symbols[4] && symbols[4] === symbols[6]) {
    alert('¡Has ganado!Si quieres volver a juagar te recomiendo que recargues la pagina');
    return;
  }
}



