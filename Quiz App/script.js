const questions=[
    {
        'que':'Which of the following is a markup language',
        'a':'HTML',
        'b':'CSS',
        'c':'javaScript',
        'd':'Php',
        'correct':'a'
    },
    {
        'que':"What year was JavaScript launched?",
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct':'b'
    },
    {
        'que':"What does CSS stands for?",
        'a':'Hypertext markup language',
        'b':'Cascading style sheet',
        'c':'Jason Object Notation',
        'd':'Cascading styling sheets',
        'correct':'b'
    }
]
let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesbox=document.getElementById("quesbox");
const optionInputs=document.querySelectorAll('.options');
const loadQuestion=()=>{
    if(index==total){
        return endQuiz();
    }
    reset();
    const data=questions[index];
    quesbox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
};
const submitQuiz=()=>{
    const ans=getAnswer();
    if(ans==questions[index].correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return ;
}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
        <h3>Thank you for playing the quiz</h3>
        <h2>${right}/${total} are correct</h2>`
}
loadQuestion();