const simpleGauss = (A, b) => {

    for (let i = 0; i < n; i++) {
        let pivo = A[i][i];
        if (pivo == 0) { // o sistema é impossível de ser resolvido pelo método de gauss simples pois o pivo é zero
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

const TotalPivoGauss = (A, b) => {
    let xPositon = [];
    for (let i = 0; i < n; i++) {
        xPositon.push(i);
    }
    for (let i = 0; i < n; i++) {
        let line = i, column = i;
        for (let j = i + 1; j < n; j++) {
            for (let k = i + 1; k < n; k++) {
                if (Math.abs(A[j][k]) > Math.abs(A[line][column])) {
                    line = j;
                    column = k;
                }
            }
        }
        if (line != i) {
            let aux;
            aux = b[i];
            b[i] = b[column];
            b[column] = aux;
            for (let j = i; j < n; j++) {
                aux = A[i][j];
                A[i][j] = A[line][j];
                A[line][j] = aux;
            }
        }
        if (column != i) {
            let aux;
            aux = xPositon[i];
            xPositon[i] = xPositon[column];
            xPositon[column] = aux;
            for (let j = 0; j < n; j++) {
                aux = A[j][i];
                A[j][i] = A[j][column];
                A[j][column] = aux;
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
    for (let i = 0; i < n; i++) {
        if (A[i][i] == 0) { // o sistema é impossível de ser resolvido pelo método de gauss com pivotamento total pois o pivo é zero
            return;
        }
    }
    let x = [];
    for (let i = 0; i < n; i++) {
        x.push(null);
    }
    for (let i = n - 1; i > -1; i--) {
        let resultado = b[i];
        for (let j = i + 1; j < n; j++) {
            resultado -= x[xPositon[j]] * A[i][j];
        }
        x[xPositon[i]] = resultado / A[i][i];
    }
    for (let i = 1; i <= n; i++) {
        //  console.log();
    }
};

const CompactGauss = (A, b) => {
    for (let i = 0; i < n; i++) {
        let pivo = A[i][i];
        if (pivo == 0) { // o sistema é impossível de ser resolvido pelo método de gauss compacto pois o pivo é zero
            return;
        }
        for (let j = i + 1; j < n; j++) {
            let a = A[j][i] / pivo;
            A[j][i] = a;
            for (let k = i + 1; k < n; k++) {
                A[j][k] -= A[i][k] * a;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = i - 1; j > -1; j--) {
            b[i] -= b[j] * A[i][j];
        }
    }
    let x = new Array(n);
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

const LU = (A, b) => {
    let L = [];
    for (let i = 0; i < n; i++) {
        L[i] = new Array(n);
    }
    for (let i = 0; i < n; i++) {
        L[i][i] = 1;
    }
    for (let i = 0; i < n; i++) {
        let pivo = A[i][i];
        if (pivo == 0) { // o sistema é impossível de ser resolvido pelo método LU pois o pivo é zero
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
    let c = new Array(n);
    for (let i = 0; i < n; i++) {
        let aux = b[i];
        for (let j = i - 1; j > -1; j--) {
            aux -= c[j] * L[i][j];
        }
        c[i] = aux;
    }
    let x = new Array(n);
    for (let i = n - 1; i > -1; i--) {
        let aux = c[i];
        for (let j = i + 1; j < n; j++) {
            aux -= A[i][j] * x[j];
        }
        x[i] = aux / A[i][i];
    }
    for (let i = 1; i <= n; i++) {
        // console.log();
    }
};

const Cholesky = (A, b) => {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (A[i][j] != A[j][i]) { // a matriz A não é simétrica
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
        if (pivo == 0) { // o sistema é impossível de ser resolvido pelo método de Cholesky pois o pivo é zero
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
    let c = new Array(n);
    for (let i = 0; i < n; i++) {
        let aux = b[i];
        for (let j = i - 1; j > -1; j--) {
            aux -= c[j] * L[i][j];
        }
        c[i] = aux;
    }
    let x = new Array(n);
    for (let i = n - 1; i > -1; i--) {
        let aux = c[i];
        for (let j = i + 1; j < n; j++) {
            aux -= A[i][j] * x[j];
        }
        x[i] = aux / A[i][i];
    }
    for (let i = 1; i <= n; i++) {
        // console.log();
    }
};


