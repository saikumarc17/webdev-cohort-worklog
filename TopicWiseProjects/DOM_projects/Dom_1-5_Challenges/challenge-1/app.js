const toggleButton=document.getElementById('toggleButton');
const statusText=document.getElementById('status');
const bulb=document.getElementById('bulb');

let defaultState=true;

toggleButton.addEventListener('click',()=>{
    if(defaultState){
        toggleButton.innerText='Turn Off';
        statusText.innerText='Status: On'
        defaultState=false;
        document.body.className="dark-mode"
        bulb.classList.remove("off");
    }else{
        toggleButton.innerText='Turn On';
        defaultState=true;
        statusText.innerText='Status: Off'
        document.body.className="";
        bulb.classList.add("off");

    }
})