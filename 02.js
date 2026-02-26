function leftParamid(n) {
    for (let i = 1; i <= n; i++)  {     
        let row = ' ';
        for (let j = i; j <= n; j++ ){
            row += ' ';
        }
        for (let k = 1; k <= i; k++) {
      row += '*';
    }
    console.log(row);
  }
}

leftParamid(5);

// function leftParamid(n) {
//     for (let i = 1; i <= n; i++){
//         let row = ' ';
//         for (let j = 1; j<=i; j++){
//             row += ' *';
//         }
//         console.log(row);
//     }
// }
// leftParamid(2);