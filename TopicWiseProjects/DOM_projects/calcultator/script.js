let consoleview=document.getElementById('viewConsole').innerText;
console.log(consoleview);


document.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click',()=>{
        consoleview=consoleview+btn.innerText;
        console.log(btn.innerText);
        console.log(consoleview);
        
    })
})

