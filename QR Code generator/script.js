const generate=document.getElementById("generate");
const download=document.getElementById("download");
const qr=document.querySelector(".qr");
generate.addEventListener('click',Generate);
download.addEventListener('click',Download);
function Generate(){
    const size=document.getElementById("select").value;
    const text=document.getElementById("text").value.trim();
    if(text.length!=0){
        qr.innerHTML="";
        new QRCode(qr,{
            text:text,
            width:parseInt(size),
            height:parseInt(size)
        });
    }
    else{
        alert("Please enter text or URL");
    }
}
function Download() {
    const canvas = document.querySelector(".qr canvas"); 
    if (canvas) {
        const imageUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imageUrl; 
        link.download = "qrcode.png"; 
        link.click();
    } else {
        alert("QR code not generated yet.");
    }
}
