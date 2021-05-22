const thebutton = document.querySelector("#myBtn");

thebutton.addEventListener("mouseover",function(){
    const daHeight = Math.floor(Math.random() * window.innerHeight);
    const daWidth = Math.floor(Math.random  () * window.innerWidth);
    thebutton.style.left = `${daWidth}px`;
    thebutton.style.top =`${daHeight}px`;

});

thebutton.addEventListener("click", function(){
    thebutton.innerText = "GOTCHA !!!!";
    document.body.style.backgroundColor = "green"
});

