const simpleGauss = (A, b) => {

  for (let i = 0; i < n; i++) {
    let pivo = A[i][i];
    for (let j = i + 1; j < n; j++) {
      let a = A[j][i] / pivo;
      for (let k = i; k < n; k++) {
        A[j][k] -= A[i][k] * a;
      }
      b[j] -= b[i]*a;
    }
  }
  let x = [];
  for (let i = n - 1; i > -1; i--) {
    let aux = b[i];
    for (let j = i + 1; j < n; j++) {
      aux -= A[i][j] * x[j];
    }
    x[i] = aux / A[i][i];
  }
};

const cholesky = (A, b) => {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (A[i][j] != A[j][i]) {
        // a matriz não é simétrica
        return;
      }
    }
  }
  let L = [];
  for (let i = 0; i < n; i++) {
    L[i] = new Array(n);
  }
  for (let i = 0; i < n; i++) {
    L[i][i] = 1;
  }
  for (let i = 0; i < n; i++) {
    let pivo = A[i][i];
    if (pivo == 0) {
      // o sistema é impossível de ser resolvido pelo método de cholesky
      return;
    }
    for (let j = i + 1; j < n; j++) {
      let a = A[j][i] / pivo;
      for (let k = i; k < n; k++) {
        A[j][k] -= A[i][k] * a;
      }
      L[j][i] = a;
    }
  }
  let z = new Array(n);
  for (let i = 0; i < n; i++) {
    let aux = b[i];
    for (let j = i - 1; j > -1; j--) {
      aux -= z[j] * L[i][j];
    }
    z[i] = aux;
  }
  let x = new Array(n);
  for (let i = n - 1; i > -1; i--) {
    let aux = z[i];
    for (let j = i + 1; j < n; j++) {
      aux -= A[i][j]*x[j];
    }
    x[i] = aux/A[i][i];
  }
};
