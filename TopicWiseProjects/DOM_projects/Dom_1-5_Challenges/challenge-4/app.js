const taskInput=document.getElementById('taskInput');
const addButton=document.getElementById('addButton');
const taskList=document.getElementById('taskList');

const totalTasks=document.getElementById('totalTasks');
const completedTasks=document.getElementById('completedTasks');
let taskcount=0;
let completedTaskCount=0;
const emptylist=document.getElementById('emptyList');

addButton.addEventListener('click',()=>{

    emptylist.style.display='none'
    
    const inputValue=taskInput.value;
    const litTag=document.createElement('li');
    litTag.classList.add('task-item');

    const checkbox=document.createElement('input');
    checkbox.type='checkbox'
    checkbox.addEventListener('click',()=>{
        if (litTag.classList[1]==='completed') {
            litTag.classList.remove('completed');
            completedTaskCount=completedTaskCount-1;
            completedTasks.innerText=`Completed: ${completedTaskCount}`;
        } else {
            litTag.classList.add('completed');
            completedTaskCount=completedTaskCount+1;
            completedTasks.innerText=`Completed: ${completedTaskCount}`
        }
    })
    litTag.appendChild(checkbox);

    const Textplace=document.createElement('p');
    Textplace.innerText=inputValue;
    Textplace.classList.add('task-text');
    litTag.appendChild(Textplace);

    const DeleteBtn=document.createElement('button');
    DeleteBtn.classList.add('delete-button');
    DeleteBtn.innerText='Delete';
    DeleteBtn.id='delete';

    DeleteBtn.addEventListener('click',()=>{
        litTag.remove();
        totalTasks.innerText=`Total tasks: ${taskList.childNodes.length-3}`
        completedTaskCount=completedTaskCount-1;
        completedTasks.innerText=`Completed: ${completedTaskCount}`;
    })

    litTag.appendChild(DeleteBtn);
    taskList.appendChild(litTag);
    taskInput.value=""
    totalTasks.innerText=`Total tasks: ${taskList.childNodes.length-3}`
})



