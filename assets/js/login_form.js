const btn_OpenLogin = document.querySelector("#show-login");
const login__inner  = document.querySelector(".hero");
const btn_CloseLogin = document.querySelector(".close-btn");
btn_OpenLogin.addEventListener("click",function(){
    login__inner.classList.add("active");
})
btn_CloseLogin.addEventListener("click",function(){
    login__inner.classList.remove("active");
})