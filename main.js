let questionInfo = [
    {
        num : 1,
        question : 'Which animal is known as "the Ship of the Desert"?',
        answers : ["Camel", "Lion", "Blue Whale", "Elephant"],
        correct : "Camel"
    },
    {
        num : 2,
        question : 'Which is the longest river on Earth?',
        answers : ["Amazon", "Nile", "Danube", "Thames"],
        correct : "Nile"
    },
    {
        num : 3,       
        question : 'Which is the largest mammal?',
        answers : ["Camel", "Lion", "Blue Whale", "Elephant"],
        correct : "Blue Whale"
    },
    {
        num : 4,
        question : 'Which is the tallest mountain in the world?',
        answers : ["Mount Fuji", "Mount Kilimanjaro", "Mount Rainier", "Mount Everest"],
        correct : "Mount Everest"
    },
    {
        num : 5,
        question : 'Which is the fastest animal on the land?',
        answers : ["Cheetah", "Lion", "Zebra", "Ostrich"],
        correct : "Cheetah"
    },
    {
        num : 6,
        question : 'Which is the largest ocean in the world?',
        answers : ["Atlantic Ocean", "Arctic Ocean", "Pacific Ocean", "Indian Ocean"],
        correct : "Pacific Ocean"
    }
]
let containerSec = document.getElementById("container");
let submitBtn = document.getElementById("submit");
let score = 0;
let index = 0;
containerSec.querySelector("#question_content").innerHTML = `<h1 id="question"><span>1.</span> Which animal is known as "The Ship of the Desert"?</h1>
<div id="answers">
    <div class="answer"><input type="radio" name="answer" id="Camel" value="Camel"> <label for="Camel">Camel</label></div>
    <div class="answer"><input type="radio" name="answer" id="Lion" value="Lion"> <label for="Lion">Lion</label></div>
    <div class="answer"><input type="radio" name="answer" id="Blue Whale" value="Blue Whale"> <label for="Blue Whale">Blue Whale</label></div>
    <div class="answer"><input type="radio" name="answer" id="Elephant" value="Elephant"> <label for="Elephant">Elephant</label></div>
</div>`;
submitBtn.addEventListener("click", () => {
    let selected = document.querySelector('input[name="answer"]:checked');
    if(selected){
        selected.parentElement.classList.add("active");
        if(selected.value == questionInfo[index].correct){
            score++;
        }
        index++;
        if(index < questionInfo.length){      
            containerSec.querySelector("#question_content").innerHTML = `<h1 id="question"><span>${questionInfo[index].num}.</span> ${questionInfo[index].question}</h1>
            <div class="answer"><input type="radio" name="answer" id="${questionInfo[index].answers[0]}" value="${questionInfo[index].answers[0]}"> <label for="${questionInfo[index].answers[0]}">${questionInfo[index].answers[0]}</label></div>
            <div class="answer"><input type="radio" name="answer" id="${questionInfo[index].answers[1]}" value="${questionInfo[index].answers[1]}"> <label for="${questionInfo[index].answers[1]}">${questionInfo[index].answers[1]}</label></div>
            <div class="answer"><input type="radio" name="answer" id="${questionInfo[index].answers[2]}" value="${questionInfo[index].answers[2]}"> <label for="${questionInfo[index].answers[2]}">${questionInfo[index].answers[2]}</label></div>
            <div class="answer"><input type="radio" name="answer" id="${questionInfo[index].answers[3]}" value="${questionInfo[index].answers[3]}"> <label for="${questionInfo[index].answers[3]}">${questionInfo[index].answers[3]}</label></div>
        </div>`;
        }               
        else{
            containerSec.style.background = "#aba9b1";
            containerSec.style.textAlign = "center";
            containerSec.style.paddingTop = "3%";
            containerSec.innerHTML = `<img src="${score<=2?"images/sadMinion.gif":"images/happyMinions.gif"}" style="margin-bottom:3%"><div style="${score <= 2? "color:#b51A2B":"color:green"};font-size : 1.4rem">Your Score : ${score} / 6</div>`;
        }
    }          
});


