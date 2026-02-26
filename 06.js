function inversecenterParamid(n) {
    for (let i = n; i >= 1; i--)  {     
        let row = ' ';
        for (let j = i; j <= n - 1; j++ ){
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
      row += '*';
    }
    console.log(row);
  }
}

inversecenterParamid(5);