let accordian=document.querySelectorAll('.accordion-button');
accordian.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        let parent=ele.parentElement;
        if(parent.classList.contains('active')){
            parent.classList.remove('active');
        }else{
            parent.classList.add('active');
        }
    })
})
