const mainHeadingId=document.getElementById('mainHeading');

document.querySelectorAll('button').forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.innerText==='Reset'){
            mainHeadingId.style.color='black'
        }else{
            mainHeadingId.style.color=btn.innerText;
        }
    })
})