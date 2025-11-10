 function cek(){ 
    let harga=parseFloat (document.getElementById("harga").value);
    let jumlah=parseFloat (document.getElementById("jumlah").value);
    let total = harga * jumlah;
        if(total > 100000){
            let diskon = total * 0.1;
            let totalBayar = total - diskon;
            document.getElementById("hasil").innerHTML = "Dapat diskon 10%! Total Bayar : " + totalBayar;
        }else{
            document.getElementById("hasil").innerHTML = "Tidak dapat diskon! Total Bayar : " + total;
        }
}