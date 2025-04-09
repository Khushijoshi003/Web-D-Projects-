const hour=document.getElementById("h");
const min=document.getElementById("m");
const sec=document.getElementById("s");
const time=()=>{
    const now =new Date();
    const hours=String(now.getHours()).padStart(2,'0');
    const minutes=String(now.getMinutes()).padStart(2,'0');
    const seconds=String(now.getSeconds()).padStart(2,'0');
    hour.value=hours;
    min.value=minutes;
    sec.value=seconds;
};
time();
setInterval(time,1000);