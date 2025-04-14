const val=document.getElementsByTagName("button");
for(let i=0;i<val.length;i++){
   val[i].addEventListener('click',calculate);
}
let expression="";
const output=document.querySelector(".output");
function calculate(e){
    const value=e.target.innerText;
    if(value=="="){
        try{
            expression=eval(expression);
            output.innerHTML=expression;
        }
        catch{
            output.innerHTML="ERROR";
            expression="";
        }
    }
    else if(value==="AC"){
        expression="";
        output.innerHTML="";
    }
    else if(value=="DEL"){
        expression=expression.slice(0,-1);
        output.innerHTML=expression;
    }
    else{
        expression+=value;
        output.innerHTML=expression;
    }
}