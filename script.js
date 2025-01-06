const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn10 = document.getElementById('btn10');
const btn11 = document.getElementById('btn11');
const btn12 = document.getElementById('btn12');
const btn13 = document.getElementById('btn13');
const btn14 = document.getElementById('btn14');
const btn15 = document.getElementById('btn15');
const btn16 = document.getElementById('btn16');

btn.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn2.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn3.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn4.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn5.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn6.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn7.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn8.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn9.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn10.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn11.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn12.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn13.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn14.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn15.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

btn16.addEventListener('click', function(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'successfully added into cart',
    showConfirmButton: false,
    timer: 1500
})
})

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})
