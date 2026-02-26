function rightParamid(n, symbol) {
    for (let i = 1; i <= n; i++)  {     
        let row = '';
        for (let j = 1; j <= i; j++) {
      row += symbol;
    }
    console.log(row);
  }
}

// rightParamid(5, '$');

function leftParamid(n, symbol) {
    for (let i = 1; i <= n; i++)  {     
        let row = ' ';
        for (let j = i; j <= n; j++ ){
            row += ' ';
        }
        for (let k = 1; k <= i; k++) {
      row += symbol;
    }
    console.log(row);
  }
}

// leftParamid(5, '$');

function centerParamid(n, symbol) {
    for (let i = 1; i <= n; i++)  {     
        let row = ' ';
        for (let j = i; j <= n -1; j++ ){
           row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
      row += symbol;
    }
    console.log(row);
  }
}

// centerParamid(5, '$');

function inverserightParamid(n, symbol) {
    for (let i = n; i >= 1; i--)  {     
        let row = '';
        for (let j = i; j <= n - 1; j++ ){
            row += '';
        }
        for (let k = 1; k <= i; k++) {
      row += symbol;
    }
    console.log(row);
  }
}

// inverserightParamid(5, '$');

function inverseleftParamid(n, symbol) {
    for (let i = n; i >= 1; i--)  {     
        let row = ' ';
        for (let j = i; j <= n - 1; j++ ){
            row += ' ';
        }
        for (let k = 1; k <= i; k++) {
      row += symbol;
    }
    console.log(row);
  }
}

// inverseleftParamid(5, '$');

function inversecenterParamid(n, symbol) {
    for (let i = n; i >= 1; i--)  {     
        let row = ' ';
        for (let j = i; j <= n - 1; j++ ){
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
      row += symbol;
    }
    console.log(row);
  }
}

// inversecenterParamid(5, '$');

function symbolParamid(n, symbol) {
    for (let i = 1; i <= n; i++)  {     
        let row = ' ';
        for (let j = i; j <= n -1; j++ ){
           row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
      row += symbol;
    }
    console.log(row);
  }
}

// symbolParamid(5, '$');

export {
  rightParamid,
  leftParamid,
  centerParamid,
  inverserightParamid,
  inverseleftParamid,
  inversecenterParamid,
  symbolParamid
};