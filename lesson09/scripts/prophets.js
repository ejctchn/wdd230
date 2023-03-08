const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

//filters
filterSelection("all")
function filterSelection(c) 
{
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  // Add the "show" class
  for (i = 0; i < x.length; i++) 
  {
    remove(x[i], "show");
    if (x[i].className.indexOf(c) > -1) add(x[i], "show");
  }
}

// Show filtered elements
function add(element, name) 
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) 
    {
      if (arr1.indexOf(arr2[i]) == -1) 
      {
        element.className += " " + arr2[i];
      }
    }
}

// Hide elements that are not selected
function remove(element, name) 
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) 
    {
      while (arr1.indexOf(arr2[i]) > -1) 
      {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
}

// Highlight active filter
var btnContainer = document.getElementById("fltrContain");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) 
{
  btns[i].addEventListener("click", function() 
  {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let n = 0;
let nth = "";

async function getProphetData() 
{
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
}
  
getProphetData();



const displayProphets = (prophets) =>
{
    const cards = document.querySelector('div.cards');
    prophets.forEach((p) =>
        {
            n += 1;
            switch(n % 10)
            {
                case n == 0:
                    break;
                case 1:
                    nth = "st";
                    break;
                case 2:
                    nth = "nd";
                    break;
                case 3:
                    nth = "rd";
                    break;
                default:
                    nth = "th";

            }
            //create elements for div 
            let card = document.createElement('section');
            card.setAttribute('class', 'card show');
            let h2 = document.createElement('h2');
            let portrait = document.createElement('img');
            let bd = document.createElement('p');
            let bp = document.createElement('p');
            let numOfChild = document.createElement('p');
            let yearsProphet = document.createElement('p');
            let death = document.createElement('p');
            let age = document.createElement('p');
            let b = new Date(`${p.birthdate}`);
            let calcAge = 0;
            
            if(p.death == null)
            {
                let today = new Date();
                let diff = today.getTime() - b.getTime();
                calcAge = (diff / (1000 * 60 * 60 * 24 * 30.7 * 12)).toFixed(0);
            }
            else
            {
                let d = new Date(`${p.death}`);
                let diff = d.getTime() - b.getTime();
                calcAge = (diff / (1000 * 60 * 60 * 24 * 30.7 * 12)).toFixed(0);
            }

            // show the prophet's full name
            h2.textContent = `${p.name} ${p.lastname}`;
            bd.textContent = `Date of Birth: ${p.birthdate}`;
            bp.textContent = `Place of Birth: ${p.birthplace}`;
            numOfChild.textContent = `Children: ${p.numofchildren}`;
            yearsProphet.textContent = `Years as a Prophet: ${p.length}`;
            death.textContent = `Death: ${p.death}`;
            age.textContent = `Age: ${calcAge}`;

            // build img portrait
            portrait.setAttribute('src', p.imageurl);
            portrait.setAttribute('alt', `Portait of ${p.name} ${p.lastname} - ${n}${nth} Latter-day President`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            portrait.setAttribute('height', '440');
            
            // Append the section with the created elements
            card.appendChild(h2);
            card.appendChild(bd);
            card.appendChild(bp);
            card.appendChild(numOfChild);
            card.appendChild(yearsProphet);
            card.appendChild(death);
            card.appendChild(age);
            card.appendChild(portrait);

            cards.appendChild(card);
        });
}