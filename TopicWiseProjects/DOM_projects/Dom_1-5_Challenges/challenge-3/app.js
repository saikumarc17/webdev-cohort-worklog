document.querySelectorAll('input').forEach((inp)=>{
    inp.addEventListener('keydown',()=>{
        if (inp.id==='nameInput') {
            document.getElementById('nameDisplay').innerText=inp.value;
        } else if(inp.id==='jobInput'){
            document.getElementById('jobDisplay').innerText=inp.value;
        } else{
            document.getElementById('ageDisplay').innerText=inp.value;
        }
    })
})
document.querySelector('textarea').addEventListener('keydown',(event)=>{
    document.getElementById('bioDisplay').innerText=event.target.value;
    
})