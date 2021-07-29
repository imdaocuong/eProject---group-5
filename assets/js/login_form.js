
const btn_OpenEnroll = document.querySelector("#show-enroll");
const enroll__inner  = document.querySelector(".enroll");
const btn_CloseEnroll = document.querySelector(".close-enroll");
btn_OpenEnroll.addEventListener("click",function(){
    enroll__inner.classList.add("active");
})
btn_CloseEnroll.addEventListener("click",function(){
    enroll__inner.classList.remove("active");
})
