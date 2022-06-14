let clickDiv = document.querySelector('.firstClickBox');
let onClick = function(){
    let divId = document.getElementById('clickBox');
    if(!(divId.className==='firstClickBox')){
        divId.className = 'fistClickBox';
    }
    else{
        divId.className = 'secondClickBox';
    }
}
clickDiv.addEventListener('click', onClick);