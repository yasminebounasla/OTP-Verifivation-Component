const codeInput1 = document.querySelector('.code-input-1');
const codeInput2 = document.querySelector('.code-input-2');
const codeInput3 = document.querySelector('.code-input-3');
const codeInput4 = document.querySelector('.code-input-4');


const verifyBtn = document.querySelector('.verify-button');
const codeText = document.querySelector('.code-text');
const correctText = document.querySelector('.correct-text');
const incorrectText = document.querySelector('.incorrect-text');

verifyBtn.addEventListener('click', function(){

    if((codeInput1.value === '') || (codeInput2.value ==='') || (codeInput3.value === '') || (codeInput4.value === '')){
        codeText.style.display = 'block';
        correctText.style.display = 'none';
        incorrectText.style.display = 'none';
    } else {
        if((codeInput1.value === '0') && (codeInput2.value === '0') && ( codeInput3.value === '0') && (codeInput4.value === '0')){
            correctText.style.display = 'block';
            codeText.style.display = 'none';
            incorrectText.style.display = 'none';
        } else {
            incorrectText.style.display = 'block';
            codeText.style.display = 'none';
            correctText.style.display = 'none';
        }
    }
})