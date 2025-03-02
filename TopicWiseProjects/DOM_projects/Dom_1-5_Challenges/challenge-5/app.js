const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carouselTrack=document.getElementById('carouselTrack');
const caption=document.getElementById('caption');
const prevButton=document.getElementById('prevButton');
const nextButton=document.getElementById('nextButton');
const indicators=document.getElementById('carouselNav')

let currentTransfrm=0;
let currentCard=0;

images.forEach((ele,index)=>{
  let img=document.createElement('img');
  img.src=ele.url;
  img.caption=ele.caption;
  img.classList.add('carousel-slide');
  carouselTrack.appendChild(img);  

  let cap=document.createElement('p');
  cap.id=index;
  cap.className='carousel-text'
  if(index===currentCard){
    cap.classList.add('d-block');
  }else{
    cap.classList.add('d-none');
  }
  cap.innerText=`${ele.caption}`;
  caption.appendChild(cap);


    let indicator=document.createElement('span');
    indicator.className='carousel-indicator';
    if(index===currentCard){
      indicator.classList.add('active');
    }else{
      indicators.classList.remove('active');
    }
    indicators.appendChild(indicator);
})


function updateCaption(index) {
 const text= document.querySelectorAll('.carousel-text');
 
 text.forEach((ele)=>{
  if(ele.classList.contains('d-block')){
    ele.classList.remove('d-block');
    ele.classList.add('d-none');
  }
 })

  text[index].classList.remove('d-none');  
  text[index].classList.add('d-block');

}


function UpdateIndicator(index) {  
  let ind=document.querySelectorAll('.carousel-indicator');

  ind.forEach((ele)=>{
      ele.classList.remove('active');
   })
  ind[index].classList.add('active');
}



nextButton.addEventListener('click',()=>{ 
  if(currentTransfrm===(-Number(images.length-1)*100)){
    currentTransfrm=0;    
  }else{
    currentTransfrm=currentTransfrm-100;
  }
  carouselTrack.style.transform=`translateX(${currentTransfrm}%)`
  // console.log(currentTransfrm);
  
  if(currentCard===images.length-1){
    currentCard=0;
  }else{
    currentCard++;
  }
  // updateCaption();
  updateCaption(currentCard);
  UpdateIndicator(currentCard);
})
prevButton.addEventListener('click',()=>{
  if (currentTransfrm===0) {
    currentTransfrm=-Number(images.length-1)*100;
  } else {
    currentTransfrm=currentTransfrm+100;
  }
  
  if(currentCard===0){
    currentCard=images.length-1;
  }else{
    currentCard--;
  }
  updateCaption(currentCard);
  UpdateIndicator(currentCard);
  carouselTrack.style.transform=`translateX(${currentTransfrm}%)`
})

const autoPlayButton=document.getElementById('autoPlayButton')

let autoplayInterval;
let autoplayStatus=false;
const timerDisplay=document.getElementById('timerDisplay');

autoPlayButton.addEventListener('click',()=>{
  if(!autoplayStatus){
    autoplayStatus=true;
    autoplayInterval=setInterval(() => {
      nextButton.click();  
    }, 5*1000);
  }else{
    autoplayStatus=false;
    clearInterval(autoplayInterval);
  }
})



// startAutoPlay();





