// Feature adding in payment method

document.getElementById('adds-money').addEventListener('click',function(){
    
    
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
})


document.getElementById('cashs-out').addEventListener('click', function(){

    document.getElementById('cashout-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
})