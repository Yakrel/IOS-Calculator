let digits = document.querySelectorAll(".digit");
digits.forEach(el => {
    el.addEventListener("click", function() {
        let digit = parseInt(this.innerHTML);
        console.log(digit);
    });
});