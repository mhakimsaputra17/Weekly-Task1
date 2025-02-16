const hitungTotalDiskon = (totalBelanja) =>{
  if(typeof totalBelanja !== "number")return console.log("Inputnya harus number ya")
  if(totalBelanja < 0 )return console.log("Total belanja gak boleh mines")
  let diskon = 0;
  let hargaFinal;
  switch(true){
    case totalBelanja >= 1000000:
      diskon = (10/100)*totalBelanja;
      hargaFinal = totalBelanja - diskon;
      console.log(`Anda mendapatkan diskon 10%, total belanja anda menjadi Rp ${hargaFinal}`);
      break;
    case totalBelanja >= 500000 && totalBelanja< 1000000:
      diskon = (5/100)*totalBelanja;
      hargaFinal = totalBelanja - diskon;
      console.log(`Anda mendapatkan diskon 5%, total belanja anda menjadi Rp ${hargaFinal}`);
      break;
    default:
    hargaFinal = totalBelanja - diskon;
     console.log(`Anda tidak mendapatkan diskon, total belanja anda Rp ${hargaFinal}`)
  }
}

hitungTotalDiskon(600000);
hitungTotalDiskon(499000);
hitungTotalDiskon(1000000);
hitungTotalDiskon(2000000);
hitungTotalDiskon(-100000);
hitungTotalDiskon("gocap");