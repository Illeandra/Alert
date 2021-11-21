window.onload = ()=>{
var TEXT = [
            "PESAN BUAT KAMU :)", // 1
            "IYAH KAMU :)", // 2
            "BALIK LAGI PLISS", // 3
            "GW MASIH KANGEH LU", // 4
            "GW MASIH SAYANG AMA LU :)" // 5
            ];

var i = 0;

for(i = 0; i < TEXT.length; i++){
    var text = TEXT[i];
    setTimeout( ShowAlert({text: text, curPosition: (i + 1), maxPosition: TEXT.length}), 500 * i);
}

function ShowAlert(prop){
    
    console.log(prop);
    
    alert(prop.text);
    
    if(prop.curPosition == prop.maxPosition){
        
        var el = document.createElement('h1');
            el.style.textAlign = "center";
            el.innerHTML = "LOPEYOU ;)";
            
            document.body.append(el);
    }
}
};
