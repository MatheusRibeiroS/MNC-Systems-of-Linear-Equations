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