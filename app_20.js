// app_20

function SetRandomIcon(){
    const arrIcon = ['images/img-1.png','images/img-2.png','images/img-3.png','images/img-4.png','images/img-5.png','images/img-6.png','images/img-7.png','images/img-8.png','images/img-1.png','images/img-2.png','images/img-3.png','images/img-4.png','images/img-5.png','images/img-6.png','images/img-7.png','images/img-8.png'];
    const icons = document.querySelectorAll('body section nav .list .item .icon');
    let conteurRepeat = 0;
    let ArrNumRndomBox = [];
    const matriculeIcon = [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7];
    for(let i = 0;i<(arrIcon.length);i++){
        function numRndomBox(){
            let bool = false;
            let stock = Math.floor(Math.random() * icons.length);
            for(let x = 0;x<ArrNumRndomBox.length;x++){
                if(stock == ArrNumRndomBox[x]){
                    bool = true;
                    break
                }
            }   
            if(bool == false){
                ArrNumRndomBox[i]=stock;
            }
            else if(bool == true){numRndomBox();}; 
        }
        numRndomBox();
    }
    icons.forEach(function(item,index){
        icons[ArrNumRndomBox[index]].style.setProperty('background-image',`url(${arrIcon[index]})`);
        icons[ArrNumRndomBox[index]].setAttribute('matricule',`${matriculeIcon[index]}`);
    });
}

const icons = document.querySelectorAll('body section nav .list .item');
let numResultStock = [];
let itemResultStock = [];
let conteurFirstClick = 0;
const ItemEvent = [];
let numEvent = [];
let conteurClick = 0;

// add event 'click' for icons
function game(item,index){
    const flips = document.querySelector('body section .btns .flips');
    conteurFirstClick++;
    flips.textContent = conteurFirstClick; 
    if(conteurFirstClick == 1){
       timeMinus(false); 
    };
    item.children[0].style.setProperty('transform','rotateY(180deg)');
    item.children[1].style.setProperty('transform','rotateY(0deg)');
    numResultStock.push(Number(item.children[1].getAttribute('matricule')));
    itemResultStock.push(item);
    numEvent.push(index);
    if(numResultStock.length==2){
        checkResult(numResultStock[0],numResultStock[1],itemResultStock[0],itemResultStock[1],ItemEvent[numEvent[0]],ItemEvent[numEvent[1]]);   
        console.log(ItemEvent[0],ItemEvent[1]);
        itemResultStock.length = 0;
        numResultStock.length = 0;
        numEvent.length = 0;
    }
}

icons.forEach(function(item,index){
    let stock = game.bind(item,item,index);                                                             //Note : =><= NameFunction.bind(object,argument0,argument1); bind();
    ItemEvent[index]=stock;
    item.addEventListener('click',ItemEvent[index]);
});

// function Check Result
function checkResult(value0,value1,item0,item1,EventItem0,EventItem1){
    if(value0 != value1){
        setTimeout(function(){
            item0.style.setProperty('animation','move .5s 1');
            item1.style.setProperty('animation','move .5s 1');
        },400);
        
        setTimeout(function(){
            item0.style.removeProperty('animation');
            item1.style.removeProperty('animation');
            item0.children[0].style.setProperty('transform','rotateY(0deg)');
            item0.children[1].style.setProperty('transform','rotateY(180deg)');
            item1.children[0].style.setProperty('transform','rotateY(0deg)');
            item1.children[1].style.setProperty('transform','rotateY(180deg)');
        },1000);
    }
    else if(value0 == value1){
        console.log(EventItem0,EventItem1);
        item0.removeEventListener('click',EventItem0); 
        item1.removeEventListener('click',EventItem1); 
    }
}   

const time = document.querySelector('body section .btns .time');
let timeOut = Number(time.textContent.slice(0,2));
let stop = setInterval(function(){
    timeOut--;
    time.textContent = `${timeOut}s`;
    if(timeOut <= 0){clearInterval(stop);}
},1000);
// function timeMinus
function timeMinus(bool){
    if(bool){clearInterval(stop)};
}

// function for Refresh
function Refresh(){
    const time = document.querySelector('body section .btns .time');
    const flips = document.querySelector('body section .btns .flips');
    time.textContent = `60s`;
    conteurFirstClick=0;
    flips.textContent = conteurFirstClick; 
    const icons = document.querySelectorAll('body section nav .list .item');
    icons.forEach(function(item){
        item.children[0].style.setProperty('transform','rotateY(0deg)');
        item.children[1].style.setProperty('transform','rotateY(180deg)');
    });
    SetRandomIcon();
    timeMinus(true);
}

window.onload = function(){
    SetRandomIcon();
}
