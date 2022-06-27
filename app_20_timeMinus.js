// app_20

// function timeMinus
let stop;
function startMinusTime(bool){
    stop = setInterval(stopMinusTime,1000,bool);
}
let numMinus = 35;
function stopMinusTime(bool){
    const time = document.querySelector('body section .container .btns .time');
    if(bool == false){
        time.textContent = `${--numMinus}s`; 
        if(numMinus == 0){
            stopMinusTime(true);
            const icons = document.querySelectorAll('body section .container nav .list .item');
            icons.forEach(function(item,index){
                item.removeEventListener('click',ItemEvent[index]);
                item.children[0].style.setProperty('transform','rotateY(0deg)');
                item.children[1].style.setProperty('transform','rotateY(180deg)');
            });
            ItemEvent.length = 0;
            alert(`click button Refresh !`);
            conteurResult = 0;
            
        }
    }
    else if(bool == true){
        clearInterval(stop);
    }
}
