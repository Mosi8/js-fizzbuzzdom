let element = document.querySelector('.container');

// ciclo for 
for (let i = 1; i <= 100; i++){
    if ( ( i%3 == 0 ) && ( i%5 == 0 ) ){
        element.innerHTML += '<div class="block verde">FizzBuzz</div>';
    }else if( i%3 == 0 ){
        element.innerHTML += '<div class="block rosso">Fizz</div>';
    }else if( i%5 == 0 ){
        element.innerHTML += '<div class="block blu">Buzz</div>';
    }else{
        element.innerHTML += '<div class="block">' + (i) + '</div>';
    };
};