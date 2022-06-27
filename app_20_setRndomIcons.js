// app_20

function SetRandomIcon(){
    const arrIcon = ['images/img-1.png','images/img-2.png','images/img-3.png','images/img-4.png','images/img-5.png','images/img-6.png','images/img-7.png','images/img-8.png','images/img-1.png','images/img-2.png','images/img-3.png','images/img-4.png','images/img-5.png','images/img-6.png','images/img-7.png','images/img-8.png'];
    const icons = document.querySelectorAll('body section .container nav .list .item .icon');
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