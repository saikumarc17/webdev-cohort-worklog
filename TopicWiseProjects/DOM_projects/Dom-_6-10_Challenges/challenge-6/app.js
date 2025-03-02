const hour=document.getElementById('hour')
const minute=document.getElementById('minute')
const second=document.getElementById('second')
const digitalclock=document.getElementById('digital-clock');

// let hourAngle=0;
// let minuteAngle=58;
// let secondAngle=55;

// setInterval(()=>{
//     if(secondAngle>=60){
//         secondAngle=0;
//         if(minuteAngle>=60){
//             minuteAngle=0;
//         }else{
//             minuteAngle+=1;
//             if(hourAngle>=360){
//                 hourAngle=0;
//             }else{
//                 hourAngle+=0.5;
//             }
//             hour.style.transform=`rotate(${hourAngle}deg)`;
//         }
//         minute.style.transform=`rotate(${minuteAngle*6}deg)`;
//     }else{
    //         secondAngle++;
    //     }
    //     second.style.transform=`rotate(${secondAngle*6}deg)`;
    // },1*1000);
    
    const options={
        weekday:'long',
        day:'2-digit',
        month:'long',
        year:'numeric'
    };
    const date=new Date();
    document.getElementById('date').innerText=date.toLocaleDateString('en-GB', options);

    setInterval(()=>{
        const date = new Date();
        const dateString = date.toLocaleString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).slice(0,8).split(':');

        digitalclock.innerText=`${(dateString[0])}:${dateString[1]}:${dateString[2]}`
        let hours=parseFloat(dateString[0]*30)+parseFloat(dateString[1]*0.5);

        //Each hour moves by 30° (since 360° / 12 = 30°).
        // Each minute slightly shifts the hour hand by 0.5° per minute.

        hour.style.transform=`rotate(${hours}deg)`;
        minute.style.transform=`rotate(${parseInt(dateString[1])*6}deg)`;
        second.style.transform=`rotate(${parseInt(dateString[2])*6}deg)`;
    },1000);

