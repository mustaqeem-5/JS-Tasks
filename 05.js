function inverseleftParamid(n) {
    for (let i = n; i >= 1; i--)  {     
        let row = ' ';
        for (let j = i; j <= n - 1; j++ ){
            row += ' ';
        }
        for (let k = 1; k <= i; k++) {
      row += '*';
    }
    console.log(row);
  }
}

inverseleftParamid(5);
