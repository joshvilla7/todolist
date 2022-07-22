const form = document.querySelector('#addtask');
const input = document.querySelector('#newtask');
const taskList = document.querySelector('#tasks');

taskList.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
});


form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTask = document.createElement('li');
    const finishBtn = document.createElement('button');
    finishBtn.innerText = 'Completed';
    finishBtn.style.color = 'rgb(162, 42, 42)';
    finishBtn.style.display = 'flex';
    finishBtn.style.justifyContent = 'flex-end';
    finishBtn.style.fontSize = '1.125rem';
    finishBtn.style.cursor = 'pointer';
    newTask.style.display = 'flex';
    newTask.style.justifyContent = 'space-between';
    newTask.style.paddingBottom = '15px';
    newTask.style.fontSize = '1.125rem';
    newTask.innerText = input.value;
    taskList.appendChild(newTask);
    newTask.appendChild(finishBtn);
    input.value = '';
});

