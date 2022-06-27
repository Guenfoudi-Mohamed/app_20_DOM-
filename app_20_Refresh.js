// app_20

// function  Refresh
function Refresh(){
    const time = document.querySelector(' .container .btns .time');
    const flips = document.querySelector('body section .container .btns .flips');
    const icons = document.querySelectorAll('body section .container nav .list .item');
    icons.forEach(function(item,index){
        item.children[0].style.setProperty('transform','rotateY(0deg)');
        item.children[1].style.setProperty('transform','rotateY(180deg)');
        item.children[0].style.removeProperty('transition');
        item.children[1].style.removeProperty('transition');
        item.removeEventListener('click',ItemEvent[index]);
        if(item.hasAttribute('style')){
            item.removeAttribute('style');
        } 
    });
    ItemEvent.length = 0;
    // add event
    addEventIcons();
    SetRandomIcon();
    stopMinusTime(true);
    conteurFirstClick=0;
    flips.textContent = conteurFirstClick; 
    numMinus = 35;
    time.textContent = `${numMinus}s`;
}

window.onload = function(){
    SetRandomIcon();
}