// app_20

// function Check Result
let conteurResult = 0;
function checkResult(value0,value1,item0,item1,EventItem0,EventItem1){
    if(value0 != value1){
        setTimeout(function(){
            item0.style.setProperty('animation','move .5s 1');
            item1.style.setProperty('animation','move .5s 1');
        },200);
        
        setTimeout(function(){
            item0.style.removeProperty('animation');
            item1.style.removeProperty('animation');
            item0.children[0].style.setProperty('transform','rotateY(0deg)');
            item0.children[1].style.setProperty('transform','rotateY(180deg)');
            item1.children[0].style.setProperty('transform','rotateY(0deg)');
            item1.children[1].style.setProperty('transform','rotateY(180deg)');
        },600);
    }
    else if(value0 == value1){
        item0.removeEventListener('click',EventItem0); 
        item1.removeEventListener('click',EventItem1); 
        conteurResult++
        if(conteurResult == 8){
            stopMinusTime(true);
            conteurResult = 0;
            const flips = document.querySelector('body section .container .btns .flips');
            const time = document.querySelector('body section .container .btns .time');
            alert(`Winner flips : ${flips.textContent}, time : ${time.textContent}`);
        }
    }
}   