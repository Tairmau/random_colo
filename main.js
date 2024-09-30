//console.log('test');

// Var

// Background Color
let background = document.getElementById('background');

// Button Random
let btn_random = document.getElementById('random');
// Functions

// Once the button press
// Background change randomly

btn_random.addEventListener("click", function() {
    random();
});

function random(){
    //console.log('test');
    let random_value = '#';
    let key = "0123456789ABCDEF";
    let key_lenght = key.length;

    for(let i = 0; i< 6; i++){
        let temp = '';
        temp += key.charAt(Math.floor(Math.random() * key_lenght));

        random_value += temp;
        
    }

    background.style.backgroundColor = random_value;

    console.log(random_value);
};