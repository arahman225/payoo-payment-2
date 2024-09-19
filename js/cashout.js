// Cahs Out money 

document.getElementById('cashing-out-final').addEventListener('click', function(event){

    event.preventDefault()
    const avaiable_Balance = document.getElementById('avaiable-balance').innerText;

    const cashOut = document.getElementById('cashing-out-money').value;

    const pinCashOut = document.getElementById('adding-pin-cashingout').value;
    console.log(pinCashOut);

    if(pinCashOut === '5555'){

        // convert into number 

        const cashout_balance = parseFloat(avaiable_Balance);
        const cashout_new_balance = parseFloat(cashOut)
        const afterCashout = cashout_balance - cashout_new_balance;

        document.getElementById('avaiable-balance').innerText = afterCashout;
    }else{
        alert('Wrong')
    }


        
})

const nameOfOrganization = document.getElementById("name").value;
console.log(nameOfOrganization);