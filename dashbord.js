function show(){
    var m=document.querySelector('.menu');
    m.classList.add('smenu')
}

function cls(){
    var m=document.querySelector('.menu');
    m.classList.remove('smenu')
}

function big(){
    var n=document.querySelector('.menu>ul>li>a');
    n.clientHeight.add('.smenu>ul>li>a')
}
