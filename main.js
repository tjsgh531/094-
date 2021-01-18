const buttons = document.querySelectorAll('.Btn');

buttons[0].addEventListener('click',onAlert);
buttons[1].addEventListener('click',onCofirm);
buttons[2].addEventListener('click',onPrompt);

const result = document.getElementById('result');

function onAlert(){
    alert('<-----경고 창----->');
}
function onCofirm(){
    const isResult = confirm('긍정적인 변화를 위해 필요한 것은 노력하는 것');
    result.textContent =`${isResult}`;
}
function onPrompt(){
    const isResult = prompt('필적확인란','긍정적인 변화를 위해 필요한 것은 노력하는 것');
    result.textContent=`${isResult}`;
}