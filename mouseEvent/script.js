//select element
const mLeave = document.querySelector(".mLeave");
const mEnter = document.querySelector(".mEnter");
const mOver = document.querySelector(".mOver");
const mOut = document.querySelector(".mOut");
const mMove = document.querySelector(".mMove");
const mClick = document.querySelector(".mClick");
const mDblClick = document.querySelector(".mDblClick");
const mWheel = document.querySelector(".mWheel");
const mContext = document.querySelector(".mContext");
const mUp = document.querySelector(".mUp");
const msgEl = document.querySelector(".msg");


//Types:

//1.Mouse down:
mLeave.addEventListener('mouseleave', function(){
    console.log('Mouse Leave');
    msgEl.textContent = "Yes you relesed mouse 🧐";
});

//2.Mouse Up

mUp.addEventListener('mouseup', ()=>{
    console.log('Mouse Up');
    msgEl.textContent = "Yes you catch the mouse 😱";
});

//3.Mouse enter

mEnter.addEventListener("mouseenter", (event)=>{
    console.log('Mouse entered', event);
    msgEl.textContent = "Yes you entered 😜";
});



mOut.addEventListener('mouseout', function (e){
    console.log('Mouse Out');
    msgEl.textContent = "Yes you out of the mouse 🙀";
});


mMove.addEventListener('mousemove', function (e){
    console.log('Mouse move');
    msgEl.textContent = "You are moving the mouse 👻";
});

mClick.addEventListener("Click", function (e){
    console.log("Mouse click", e);
    
});

mDblClick.addEventListener('dbclick', function (e) {
    console.log('Mouse double click', e);
    msgEl.textContent = "You are double clicked the mouse 🤓";
});

mWheel.addEventListener("wheel", function (e) {
    console.log("Mouse wheel", e);
    msgEl.textContent = "You are scroling the mouse 🚴";
});



