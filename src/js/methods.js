const simpleGauss = (A, b) => {

    for (let i = 0; i < n; i++) {
        let pivo = A[i][i];
        if (pivo == 0) { // o sistema é impossível de ser resolvido pelo método de gauss pois o pivo é zero
            return;
        }
        for (let j = i + 1; j < n; j++) {
            let a = A[j][i] / pivo;
            for (let k = i; k < n; k++) {
                A[j][k] -= A[i][k] * a;
            }
            b[j] -= b[i] * a;
        }
    }
    let x = [];
    for (let j = 0; j < n; j++) {
        x.push(null);
    }

    for (let i = n - 1; i > -1; i--) {
        let aux = b[i];
        for (let j = i + 1; j < n; j++) {
            aux -= A[i][j] * x[j];
        }
        x[i] = aux / A[i][i];
    }
    for (let i = 1; i <= n; i++) {
        // console.log();
    }
};

const PartialPivoGauss = (A, b) => {
    for (let i = 0; i < n; i++) {
        let line = i;
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(A[j][i]) > Math.abs(A[line][i])) {
                line = j;
            }
        }
        if (line != i) {
            let aux = b[i];
            b[i] = b[line];
            b[line] = aux;
            for (let k = i; k < n; k++) {
                aux = A[line][k];
                A[line][k] = A[i][k];
                A[i][k] = aux;
            }
        }
        for (let j = i + 1; j < n; j++) {
            let m = A[j][i] / A[i][i];
            for (let k = i; k < n; k++) {
                A[j][k] -= A[i][k] * m;
            }
            b[j] -= b[i] * m;
        }
    }
    let x = [];
    for (let i = 0; i < n; i++) {
        x.push(null);
    }
    for (let i = n - 1; i > -1; i--) {
        let aux = b[i];
        for (let j = i + 1; j < n; j++) {
            aux -= A[i][j] * x[j];
        }
        x[i] = aux / A[i][i];
    }
    for (let i = 1; i <= n; i++) {
        // console.log();
    }
};


