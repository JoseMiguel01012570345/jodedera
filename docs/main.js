


function insert_number(params) {
    
    let random_number=document.getElementById("number")
    
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    random_number.innerText = String(randomNumber)
}

document.addEventListener('DOMContentLoaded', function() {
    
    let generator=document.getElementById("generate")

    generator.addEventListener('click', function(event) {
        insert_number()
        console.log("AA")
    });
});