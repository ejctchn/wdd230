const url = "./json/fruitsData.json";

let submit = false;
let choice1 = "";
let choice2 = "";
let choice3 = "";

//check to see if they have any orders
let orders = parseInt(localStorage.getItem('orders'));
let fruit_name = ""
if (isNaN(orders))
{
    localStorage.setItem('orders', 0);
    orders = parseInt(localStorage.getItem('orders'));        
}

let order_final = `${orders}`;

document.querySelector('#order-count').innerHTML = order_final;

//load json file
async function getFlavors() 
{
    if(submit)
    {

    }
    else
    {
        const response = await fetch(url);
        const data = await response.json();

        displayFlavors(data.fruits);
    }
}

getFlavors();

const displayFlavors = (fruits) =>
{
    const cards = document.querySelector('#flavor1_choice');
    fruits.forEach((p) =>
        {
            //create elements for list 
            let fla = document.createElement('option');
                  
            fla.textContent = `${p.name}`;
            
            // show the flavors's name
            cards.appendChild(fla)
        });

    const cards2 = document.querySelector('#flavor2_choice');
    fruits.forEach((p) =>
        {
            //create elements for list 
            let fla = document.createElement('option');
            
            // show the flavors's name
            fla.textContent = `${p.name}`;
            
            cards2.appendChild(fla)
        });
        
    const cards3 = document.querySelector('#flavor3_choice');
    fruits.forEach((p) =>
        {
            //create elements for list 
            let fla = document.createElement('option');
            
            // show the flavors's name
            fla.textContent = `${p.name}`;
            
            cards3.appendChild(fla)
        });
}     


//when "Place Order" is clicked
function orderSomething()
{
    submit = true;
    //pull the current amount of orders from local storage
    let orders = parseInt(localStorage.getItem('orders'));

    //increment order count
    orders += 1;
    localStorage.setItem('orders', orders);

    
    let n = document.querySelector('#name').value;
    let e = document.querySelector('#email').value;
    let p = document.querySelector('#phone').value;

    choice1 = document.querySelector('#flavor1_choice').value;
    choice2 = document.querySelector('#flavor2_choice').value;
    choice3 = document.querySelector('#flavor3_choice').value;
   
    /*
    let message = `<p>Order Placed</p> <br> <p>Details:</p> <br> <p>Name: ${n}</p> <br> <p>Email: ${e}</p> <br> <p>Phone Number: ${p}</p> <br> <p>Flavor 1: ${choice1}</p> <br> <p>Flavor 2: ${choice2}</p> <br> <p>Flavor 3: ${choice3}</p>`;
    document.querySelector('.order-page').innerHTML = message;

    */
    getFlavors(choice1, choice2, choice3);
}

const displayDetails = (fruits, choice1, choice2, choice3) =>
{
    const cards01 = document.querySelector('section');
    fruits.forEach((p) =>
        {
            if(p.name == choice1)
            {
                let fla = document.createElement('h2');

                let carb = document.createElement('h3');
                let prot = document.createElement('h3');
                let fat = document.createElement('h3');
                let cal = document.createElement('h3');
                let sugar = document.createElement('h3');

                carb.textContent = `${p.nutritions.carbohydrates}`;
                prot.textContent = `${p.nutritions.protien}`;
                fat.textContent = `${p.nutritions.fat}`;
                cal.textContent = `${p.nutritions.calories}`;
                sugar.textContent = `${p.nutritions.sugar}`;

                fla.appendChild(carb);
                fla.appendChild(prot);
                fla.appendChild(fat);
                fla.appendChild(cal);
                fla.appendChild(sugar);

                cards01.appendChild(fla)
            }
        });
    const cards02 = document.querySelector('section');
    fruits.forEach((p) =>
        {
            if(p.name == choice2)
            {
                let fla = document.createElement('h2');

                let carb = document.createElement('h3');
                let prot = document.createElement('h3');
                let fat = document.createElement('h3');
                let cal = document.createElement('h3');
                let sugar = document.createElement('h3');

                carb.textContent = `${p.nutritions.carbohydrates}`;
                prot.textContent = `${p.nutritions.protien}`;
                fat.textContent = `${p.nutritions.fat}`;
                cal.textContent = `${p.nutritions.calories}`;
                sugar.textContent = `${p.nutritions.sugar}`;

                fla.appendChild(carb);
                fla.appendChild(prot);
                fla.appendChild(fat);
                fla.appendChild(cal);
                fla.appendChild(sugar);

                cards02.appendChild(fla)
            }
        });
    const cards03 = document.createElement('section');
    fruits.forEach((p) =>
        {
            if(p.name == choice3)
            {
                let fla = document.createElement('h2');

                let carb = document.createElement('h3');
                let prot = document.createElement('h3');
                let fat = document.createElement('h3');
                let cal = document.createElement('h3');
                let sugar = document.createElement('h3');

                carb.textContent = `${p.nutritions.carbohydrates}`;
                prot.textContent = `${p.nutritions.protien}`;
                fat.textContent = `${p.nutritions.fat}`;
                cal.textContent = `${p.nutritions.calories}`;
                sugar.textContent = `${p.nutritions.sugar}`;

                fla.appendChild(carb);
                fla.appendChild(prot);
                fla.appendChild(fat);
                fla.appendChild(cal);
                fla.appendChild(sugar);

                cards03.appendChild(fla)
            }
        });

    let message = `Flavor 1: ${cards01}</p> <br> <p>Flavor 2: ${cards02}</p> <br> <p>Flavor 3: ${cards03}</p>`;
    document.querySelector('.order-page').innerHTML = message;
}    