document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()

    const inputNumber = document.getElementById('input-number').value;
    const inputPin = document.getElementById('input-pin').value;
    console.log(inputNumber, inputPin)

    if(inputNumber === '0' && inputPin === '5555'){
        window.location.href = 'js/home.html'
    }else{
        alert('Login failed')
    }
})