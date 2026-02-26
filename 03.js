function centerParamid(n) {
    for (let i = 1; i <= n; i++)  {     
        let row = ' ';
        for (let j = i; j <= n -1; j++ ){
           row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
      row += '*';
    }
    console.log(row);
  }
}

centerParamid(5);