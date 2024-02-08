function tdcarousal({
  wrapperElement,
  slideElement,
  slideNextBtn,
  slidePrevBtn,
  totalSlideCount,
  currentSlideCount,
  indicator,
}){
    let wrapper = document.querySelector(wrapperElement);
    let items = wrapper.querySelectorAll(slideElement);
    let nextBtn = document.querySelector(slideNextBtn);
    let prevBtn = document.querySelector(slidePrevBtn);
    let navigation_indicator = document.querySelector(indicator);
    let totalSlide = document.querySelector(totalSlideCount);
    let currentSlide = document.querySelector(currentSlideCount);
    let indicators_array;
    var state = 0;
      /* iife */
    (function init(){
     let styleCustom = document.createElement('div');
      styleCustom.innerHTML  =  styleCustom.innerHTML +`
      .td-active-${wrapperElement}{
        scale:1;
        z-index:10;
         filter:grayscale(0);
        & img{
          width:100%;
          height:100%;
        }
      }
      .td-active-p${wrapperElement}{
        scale:.7;
        transform-origin:center;
        translate:-60%;
        z-index:1;
         & img{
          width:100%;
          height:100%;
        }
      }
      .td-active-n${wrapperElement}{
        scale:.7;
        transform-origin:center;
        translate:60%;
        z-index:1;
         & img{
          width:100%;
          height:100%;
        }
  }
      `;
    
    items.forEach((item,index)=>{
      item.classList.remove('td-active-p');
      item.classList.remove('td-active');
      item.classList.remove('td-active-n');
      navigation_indicator.setAttribute('min','0');
      navigation_indicator.setAttribute('max',items.length-1);
      navigation_indicator.value=state;
     }) 
    state=1;
      totalSlide.textContent=items.length;
      setCurrentSlide(state);
      indicatorGlow(state);
    (items[state-1] !== undefined) ? items[state-1].classList.add('td-active-p'):'';
    items[state].classList.add('td-active');
    (items[state+1]!== undefined) ? items[state+1].classList.add('td-active-n'):''; 
    })();
      /* iife */
    function indicatorGlow(state){
      
      navigation_indicator.value=state;
     /* for(let i=0;i<items.length;i++){
        navigation_indicator.children[i].classList.remove('indicate');
      }
      navigation_indicator.children[state].classList.add('indicate');*/
    }
  
    function setCurrentSlide(state){
      currentSlide.textContent="";
      currentSlide.textContent=parseInt(state) + 1;
    }
    function nextfinal(){
          items.forEach((item)=>{
            item.classList.remove('td-active-p');
            item.classList.remove('td-active');
            item.classList.remove('td-active-n');
          })

      state=0;
          (items[state-1] !== undefined) ? items[state-1].classList.add('td-active-p'):'';
          items[state].classList.add('td-active');
          (items[state+1]!== undefined) ? items[state+1].classList.add('td-active-n'):'';

    }
    function prevfinal(){
          items.forEach((item)=>{
            item.classList.remove('td-active-p');
            item.classList.remove('td-active');
            item.classList.remove('td-active-n');
          })

      state = items.length-1;

          (items[state-1] !== undefined) ? items[state-1].classList.add('td-active-p'):'';
          items[state].classList.add('td-active');
          (items[state+1]!== undefined) ? items[state+1].classList.add('td-active-n'):'';

    }
    function next(){
      
      if(state < items.length-1){
          (items[state-1] !== undefined)?items[state-1].classList.remove('td-active-p'):'';
          items[state].classList.remove('td-active');
          (items[state+1]!== undefined) ? items[state+1].classList.remove('td-active-n'):'';
          state=state+1;
          (items[state-1] !== undefined)?items[state-1].classList.add('td-active-p'):'';
          items[state].classList.add('td-active');
          (items[state+1]!== undefined) ? items[state+1].classList.add('td-active-n'):'';
      }
      else{
         nextfinal();
      }
      indicatorGlow(state);
      setCurrentSlide(state);
    }
    function prev(){

      if(state >0){
          (items[state-1] !== undefined) ? items[state-1].classList.remove('td-active-p'):'';
          items[state].classList.remove('td-active');
          (items[state+1]!== undefined) ? items[state+1].classList.remove('td-active-n'):'';
          state=state-1;
          (items[state-1] !== undefined) ? items[state-1].classList.add('td-active-p'):'';
          items[state].classList.add('td-active');
           (items[state+1]!== undefined) ? items[state+1].classList.add('td-active-n'):'';
      }
      else{
         prevfinal();
      }
      indicatorGlow(state);
      setCurrentSlide(state);
    }
    
    function stateSlider(currState){
      let i;
      for(i=0;i<items.length;i++){
            items[i].classList.remove('td-active-p');
            items[i].classList.remove('td-active');
            items[i].classList.remove('td-active-n');
      }
     
      state=parseInt(currState);
      console.log(currState);
            (items[state-1] !== undefined) ? items[state-1].classList.add('td-active-p'):'';
          items[state].classList.add('td-active');
           (items[state+1]!== undefined) ? items[state+1].classList.add('td-active-n'):'';
    }
  
  
    nextBtn.addEventListener('click',()=>{next()});
    prevBtn.addEventListener('click',()=>{prev()});
    navigation_indicator.addEventListener('input',(e)=>{
      stateSlider(e.target.value);
      setCurrentSlide(e.target.value);
    })
  }

var tdcarousal = tdcarousal({
  wrapperElement:".td-carousel-wrapper",
  slideElement:".td-item",
  slideNextBtn:".td-btn-next",
  slidePrevBtn:".td-btn-prev",
  totalSlideCount:".totalSlide",
  currentSlideCount:".currentSlide",
  indicator:".indicator",
}); 
