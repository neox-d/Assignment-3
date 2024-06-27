const button = document.getElementById("guess");
let x = Math.floor((Math.random() * 10) + 1);

button.addEventListener('click', () => {
    const number = document.getElementById("input").value;
    console.log(number);   
    console.log(x);
    const p = document.getElementById("Message");
    p.innerHTML="";
    if (number < x) {
        p.innerHTML = "Move right!!";
    } else if(number > x) {
        p.innerHTML = "Move left!!";
    } else {
        p.innerHTML = "Congratulations!!! You won!";
    }
})