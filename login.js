console.log('connected')
var x=document.getElementById('id');
var y=document.getElementById('register');
var z=document.getElementById('btn')
function register(){
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login(){
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';

}
var modal =document.getElementById('login-form');
window.onlick =function(event){
    if (event.target==modal)
    {
        modal.style.disply = "none"
    }
}


// 