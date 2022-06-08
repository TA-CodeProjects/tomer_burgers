let map = new Map;
map.set('counter1', {val: 0});
map.set('counter2', { val: 0 });
map.set('counter3', { val: 0 });
map.set('counter4', { val: 0 });
map.set('counter5', { val: 0 });
map.set('counter6', { val: 0 });

let mapPrice = new Map;
mapPrice.set('counter1', { price: 3 });
mapPrice.set('counter2', { price: 2 });
mapPrice.set('counter3', { price: 0.5 });
mapPrice.set('counter4', { price: 0.5 });
mapPrice.set('counter5', { price: 0.5 });
mapPrice.set('counter6', { price: 0.5 });

let price = 7


function add(top, counter) {
    let counterIncrement = document.getElementById(counter);
    counterIncrement.innerHTML = ++map.get(counter).val;
    price += mapPrice.get(counter).price;
    document.getElementById('price').innerHTML = price;
    const top_inside = document.getElementById('top-inside');
    const toAdd = document.createElement('div');
    toAdd.setAttribute("id", top);
    top_inside.appendChild(toAdd);
}

function remove(top, counter) {
    let counterDecrement = document.getElementById(counter);
    if (map.get(counter).val >0) {
        counterDecrement.innerHTML = --map.get(counter).val;
        price -= mapPrice.get(counter).price;
        document.getElementById('price').innerHTML = price;
    }
    const top_inside = document.getElementById('top-inside');
    const toAdd = document.getElementById(top);
    top_inside.removeChild(toAdd);
}


