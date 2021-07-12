/**
 * returns the mathematical expression formatted using Regex.
 *
 * @param {input} string of the unformatted mathematical expression.
 * @returns The string of the formatted mathematical expression.
 */
function formattingExpression(input) {
  return input
    .replace(/sen|sin/gi, "sin")
    .replace(/cos/gi, "cos")
    .replace(/tg|tan/gi, "tan")
    .replace(/\^/gi, "**")
    .replace(/pi/gi, "Math.PI")
    .replace(/\log\D/gi, "log10(")
    .replace(/\ln/gi, "log")
    .replace(/\e/gi, "Math.E");
}

/**
 * Builds visual matrix in HTML
 * */
const resize = () => {
  const n = parseInt(document.querySelector("#n").value);
  const context = document.querySelector("#config-matrix");
  context.innerHTML = null;

  if (n && 20 > n > 0) {
    let tableBody = document.createElement("tbody");
    let table = document.createElement("table");
    let row = document.createElement(`tr`);
    let cell = document.createElement(`th`);
    cell.innerText = `A`;
    cell.className = "matrix-label";
    row.appendChild(cell);

    for (let i = 1; i <= n; i++) {
      cell = document.createElement(`th`);
      cell.innerText = `${i}`;
      cell.className = "matrix-label";
      row.appendChild(cell);
    }
    cell = document.createElement(`th`);
    cell.innerText = `B`;
    cell.className = "matrix-label";
    row.appendChild(cell);
    tableBody.appendChild(row);

    for (let i = 1; i <= n; i++) {
      let row = document.createElement(`tr`);
      cell = document.createElement(`th`);
      cell.innerText = `${i}`;
      row.appendChild(cell);
      for (let j = 1; j <= n; j++) {
        cell = document.createElement(`th`);
        cell.innerHTML = `<input type="number">`;
        row.appendChild(cell);
      }
      cell = document.createElement(`th`);
      cell.innerHTML = `<input type="number">`;
      row.appendChild(cell);
      tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    context.appendChild(table);
  }
};

const calculate = () => {
  switch (document.querySelector('input[name="methods"]:checked').value) {
    case 1:
      // Método de Gauss - Simples
      simpleGauss();
      break;
    case 2:
      // Método de Gauss - Pivotamento Parcial
      PartialPivoGauss();
      break;
    case 3:
      // Método de Gauss - Pivotamento Total
      TotalPivoGauss();
      break;
    case 4:
      // Método de Gauss - Compacto
      CompactGauss();
      break;
    case 5:
      // Decomposiçào LU
      LU();
      break;
    case 6:
      // Cholesky
      Cholesky();
      break;
    case 7:
      // Jacobi-Richardson
      break;
    case 8:
      // Gauss-Seidel
      GaussSeidel();
      break;

    default:
      break;
  }
};

const getMatrices = () => {
  let matrix = [],
    b = [], a = [],
    aux = [];

  let row = document.getElementsByTagName("table")[0].rows;
  for (let i = 1; i < row.length; i++) {
    for (let j = 1; j <= row.length; j++) {
      aux.push(row[i].cells[j].firstChild.value);
    }
    matrix.push(aux);
    aux = [];
  }
  b = matrix.map((elem) => elem.pop());
  a = matrix;

  return { a: a, b: b };
};