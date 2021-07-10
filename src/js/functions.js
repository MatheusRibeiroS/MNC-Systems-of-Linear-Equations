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
    context.appendChild(row);

    for (let i = 1; i <= n; i++) {
      let row = document.createElement(`tr`);
      cell = document.createElement(`th`);
      cell.innerText = `${i}`;
      row.appendChild(cell);
      for (let j = 1; j <= n; j++) {
        cell = document.createElement(`th`);
        cell.innerHTML = `<input type="number" id="a${i}${j}">`;
        row.appendChild(cell);
      }
      cell = document.createElement(`th`);
      cell.innerHTML = `<input type="number" id="b${i}">`;
      row.appendChild(cell);
      context.appendChild(row);
    }
  }
};
