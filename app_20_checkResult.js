// app_20

let numResultStock = [];
let itemResultStock = [];
let conteurFirstClick = 0;
const ItemEvent = [];
let numEvent = [];
let indexItem = []
// add event 'click' for icons
function game(item,index){
    const flips = document.querySelector('body section .container .btns .flips');
    conteurFirstClick++;
    flips.textContent = conteurFirstClick; 
    if(conteurFirstClick == 1){
        startMinusTime(false); 
    };
    item.children[0].style.setProperty('transform','rotateY(180deg)');
    item.children[1].style.setProperty('transform','rotateY(0deg)');
    item.children[0].style.setProperty('transition','transform .5s');
    item.children[1].style.setProperty('transition','transform .5s');
    numResultStock.push(Number(item.children[1].getAttribute('matricule')));
    itemResultStock.push(item);
    numEvent.push(index);
    indexItem.push(index);
    // if(item){

    // }
    if(numResultStock.length==2){
        if(indexItem[0]==indexItem[1]){              //if click for the same item 2 times
            indexItem.length= 0;
            alert('Click on a different icon');
            itemResultStock.length = 0;
            numResultStock.length = 0;
            numEvent.length = 0;
            indexItem.length= 0;
            Refresh();
        }else{
            indexItem.length= 0;
            checkResult(numResultStock[0],numResultStock[1],itemResultStock[0],itemResultStock[1],ItemEvent[numEvent[0]],ItemEvent[numEvent[1]]);   
            itemResultStock.length = 0;
            numResultStock.length = 0;
            numEvent.length = 0;
        }   
    }
}
// add event for items
function addEventIcons(){
    const icons = document.querySelectorAll('body section .container nav .list .item');
    icons.forEach(function(item,index){
        let stock = game.bind(item,item,index);                                                             //Note : =><= NameFunction.bind(object,argument0,argument1); bind();
        ItemEvent[index]=stock;
        item.addEventListener('click',ItemEvent[index]);
    });
} 
addEventIcons();
