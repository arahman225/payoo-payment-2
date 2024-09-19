
document.getElementById('adding-final').addEventListener('click', function(event){
    event.preventDefault()
    

    const addMoney = document.getElementById('adding-money-amount').value;

    const addPin = document.getElementById('adding-pin').value;

    if(addPin === '5555'){
        console.log('Successfully added money');
        const availableBalance = document.getElementById('avaiable-balance').innerText;
        
        const convetNewBalance = parseFloat(addMoney)


        // convert into number

        const converToNumber = parseInt(availableBalance)


        const finalBalance= converToNumber + convetNewBalance;
        document.getElementById('avaiable-balance').innerText = finalBalance;

        document.getElementById('adding-money-amount').value = '';
        // document.getElementById('adding-pin').value='';

    }else{
        alert('Failed to add money')
    }

    
    
});

