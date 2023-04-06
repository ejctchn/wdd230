//fruit file
const url = "./json/fruitsData.json";
const url2 = "./json/fruitsData2.json";

let choice1 = "";
let choice2 = "";
let choice3 = "";
let clickedOrder = false;

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
    const response = await fetch(url);
    const data = await response.json();
    displayFlavors(data.fruits);
}

const ff = getFlavors();

const displayFlavors = (fruits) =>
{
    let c1 = localStorage.getItem('choice1')
    let c2 = localStorage.getItem('choice2')
    let c3 = localStorage.getItem('choice3')
 
    let carb_total = 0;
    let protein_total = 0;
    let fat_total = 0;
    let cal_total = 0;
    let sug_total = 0;

    //create elements
    let nm = document.createElement('p');
    let em = document.createElement('p');
    let ph = document.createElement('p');
    let si = document.createElement('p');
    let orderdate = document.createElement('p');
    nm.textContent = localStorage.getItem('name');
    em.textContent = localStorage.getItem('email');
    ph.textContent = localStorage.getItem('phone');
    orderdate.textContent = localStorage.getItem('orderdate');
    si.textContent = localStorage.getItem('si');

    //update html
    const userinfo = document.querySelector('#userinfo');
    let card = document.createElement('section');
    card.appendChild(nm);
    card.appendChild(em);
    card.appendChild(ph);
    card.appendChild(orderdate);
    card.appendChild(si);

    userinfo.appendChild(card);

    const details = document.querySelector('#details');
    const cards = document.querySelector('#flavor1_choice');
    fruits.forEach((p) =>
        {
            //create elements for list 
            let fla = document.createElement('option');
            let flavorname = document.createElement('h2');
            let card = document.createElement('section');
            let carb = document.createElement('p');
            let prot = document.createElement('p');
            let fat = document.createElement('p');
            let cal = document.createElement('p');
            let sugar = document.createElement('p');

            if(p.name == c1)
            {
                carb_total += parseFloat(p.nutritions.carbohydrates);
                protein_total += parseFloat(p.nutritions.protein);
                fat_total += parseFloat(p.nutritions.fat);
                cal_total += parseFloat(p.nutritions.calories);
                sug_total += parseFloat(p.nutritions.sugar);

                flavorname.textContent = `Fruit: ${p.name}`;
                carb.textContent = `Carbohydrates: ${p.nutritions.carbohydrates}g`;
                prot.textContent = `Protein: ${p.nutritions.protein}g`;
                fat.textContent = `Fat ${p.nutritions.fat}g`;
                cal.textContent = `Cal ${p.nutritions.calories}g`;
                sugar.textContent = `Sugar ${p.nutritions.sugar}g`;

                card.appendChild(flavorname);
                card.appendChild(carb);
                card.appendChild(prot);
                card.appendChild(fat);
                card.appendChild(cal);
                card.appendChild(sugar);
                
                details.appendChild(card);
            }
                  
            fla.textContent = `${p.name}`;
            
            // show the flavors's name
            cards.appendChild(fla);
        });

    const cards2 = document.querySelector('#flavor2_choice');
    fruits.forEach((p) =>
        {
            //create elements for list 
            let fla = document.createElement('option');
            let flavorname = document.createElement('h2');
            let card = document.createElement('section');
            let carb = document.createElement('p');
            let prot = document.createElement('p');
            let fat = document.createElement('p');
            let cal = document.createElement('p');
            let sugar = document.createElement('p');

            if(p.name == c2)
            {
                carb_total += parseFloat(p.nutritions.carbohydrates);
                protein_total += parseFloat(p.nutritions.protein);
                fat_total += parseFloat(p.nutritions.fat);
                cal_total += parseFloat(p.nutritions.calories);
                sug_total += parseFloat(p.nutritions.sugar);

                flavorname.textContent = `Fruit: ${p.name}`;
                carb.textContent = `Carbohydrates: ${p.nutritions.carbohydrates}g`;
                prot.textContent = `Protein: ${p.nutritions.protein}g`;
                fat.textContent = `Fat: ${p.nutritions.fat}g`;
                cal.textContent = `Calories: ${p.nutritions.calories}g`;
                sugar.textContent = `Sugar: ${p.nutritions.sugar}g`;

                card.appendChild(flavorname);
                card.appendChild(carb);
                card.appendChild(prot);
                card.appendChild(fat);
                card.appendChild(cal);
                card.appendChild(sugar);
                
                details.appendChild(card);
            }
        
            // show the flavors's name
            fla.textContent = `${p.name}`;
            
            cards2.appendChild(fla);
        });
        
    const cards3 = document.querySelector('#flavor3_choice');
    fruits.forEach((p) =>
        {
            //create elements for list 
            let fla = document.createElement('option');
            let flavorname = document.createElement('h2');
            let card = document.createElement('section');
            let carb = document.createElement('p');
            let prot = document.createElement('p');
            let fat = document.createElement('p');
            let cal = document.createElement('p');
            let sugar = document.createElement('p');
            

            if(p.name == c3)
            {
                carb_total += parseFloat(p.nutritions.carbohydrates);
                protein_total += parseFloat(p.nutritions.protein);
                fat_total += parseFloat(p.nutritions.fat);
                cal_total += parseFloat(p.nutritions.calories);
                sug_total += parseFloat(p.nutritions.sugar);

                flavorname.textContent = `Fruit: ${p.name}`;
                carb.textContent = `Carbohydrates: ${p.nutritions.carbohydrates}g`;
                prot.textContent = `Protein: ${p.nutritions.protein}g`;
                fat.textContent = `Fat: ${p.nutritions.fat}g`;
                cal.textContent = `Calories: ${p.nutritions.calories}g`;
                sugar.textContent = `Sugar: ${p.nutritions.sugar}g`;
                
                card.appendChild(flavorname);
                card.appendChild(carb);
                card.appendChild(prot);
                card.appendChild(fat);
                card.appendChild(cal);
                card.appendChild(sugar);
                
                details.appendChild(card);
            }
            
            // show the flavors's name
            fla.textContent = `${p.name}`;
            
            cards3.appendChild(fla);
        });

        //create totals
        let t_card = document.querySelector('#totals');
        let total_card = document.createElement('section');
        let carb_tot_ele = document.createElement('p');
        let protein_tot_ele = document.createElement('p');
        let fat_tot_ele = document.createElement('p');
        let cal_tot_ele = document.createElement('p');
        let sug_tot_ele = document.createElement('p');

        carb_tot_ele.textContent = `Carbohydrates: ${(carb_total).toFixed(1)}g`;
        protein_tot_ele.textContent = `Protein: ${(protein_total).toFixed(1)}g`;
        fat_tot_ele.textContent = `Fat: ${(fat_total).toFixed(1)}g`;
        cal_tot_ele.textContent = `Calories: ${(cal_total).toFixed(1)}g`;
        sug_tot_ele.textContent = `Sugar: ${(sug_total).toFixed(1)}g`;

        total_card.appendChild(carb_tot_ele);
        total_card.appendChild(protein_tot_ele);
        total_card.appendChild(fat_tot_ele);
        total_card.appendChild(cal_tot_ele);
        total_card.appendChild(sug_tot_ele);

        t_card.appendChild(total_card);
}


function orderSomething()
{
    //receive orders
    let orders = parseInt(localStorage.getItem('orders'));

    //increment order count
    orders += 1;
    localStorage.setItem('orders', orders);

    //get the order date
    const date = new Date();
    let m = date.getMonth();
    let month = get_order_month(m);

    //extract user information
    let n = document.querySelector('#name').value;
    let e = document.querySelector('#email').value;
    let p = document.querySelector('#phone').value;
    let si = document.querySelector('#si').value;

    localStorage.setItem('name', n);
    localStorage.setItem('email', e);
    localStorage.setItem('phone', p);
    localStorage.setItem('orderdate', `Order placed on: ${date.getDay()} ${month} ${date.getFullYear()}`);
    localStorage.setItem('si', `Special Instructions: ${si}`);



    //place info into html


    let choice1 = document.querySelector('#flavor1_choice').value;
    let choice2 = document.querySelector('#flavor2_choice').value;
    let choice3 = document.querySelector('#flavor3_choice').value;
    localStorage.setItem('choice1', choice1);
    localStorage.setItem('choice2', choice2);
    localStorage.setItem('choice3', choice3);

}

function get_order_month(m)
{
    switch(m)
    {
        case 0:
            monthname = 'Jan'
            break;
        case 1:
            monthname = 'Feb'
            break;
        case 2:
            monthname = 'Mar'
            break;
        case 3:
            monthname = 'Apr'
            break;
        case 4:
            monthname = 'May'
            break;
        case 5:
            monthname = 'Jun'
            break;
        case 6:
            monthname = 'Jul'
            break;
        case 7:
            monthname = 'Aug'
            break;
        case 8:
            monthname = 'Sep'
            break;
        case 9:
            monthname = 'Oct'
            break;
        case 10:
            monthname = 'Nov'
            break;
        case 11:
            monthname = 'Dec'
            break;
    }
    return monthname;
}