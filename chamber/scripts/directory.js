const url = 'json/directory.json';

//filters
filterSelection("gridFilter")
function filterSelection(c) 
{
    var x, i;
    x = document.getElementsByClassName("card");
    if (c == "listFilter")
    {
        for (i = 0; i < x.length; i++) 
        {
            var current = document.getElementsByClassName("gridFilter");
            current[0].className = current[0].className.replace(" gridFilter", " listFilter");
        }
    }
    else
    {
        for (i = 0; i < x.length; i++) 
        {
            var current = document.getElementsByClassName("listFilter");
            current[0].className = current[0].className.replace(" listFilter", " gridFilter");
        }
    }
}

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
let listFilt = false;

for (var i = 0; i < btns.length; i++) 
{
  btns[i].addEventListener("click", function() 
  {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    //check to see whether to show grid or list
  });
}


async function getDirectoryData() 
{
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data.directory);
}

getDirectoryData();


const displayDirectory = (directory) =>
{
    const cards = document.querySelector('div.cards');
    directory.forEach((p) =>
        {
            //create elements for div 
            let card = document.createElement('section');
            let image = document.createElement('img');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let businessName = document.createElement('p');

            card.setAttribute('class', 'card gridFilter');

            // show the prophet's full info
            address.textContent = `${p.address}`;
            phone.textContent = `${p.phone}`;
            website.textContent = `${p.website}`;
            businessName.textContent = `${p.name}`;

            // build img portrait
            image.setAttribute('src', p.imageurl);
            image.setAttribute('alt', `${p.name} Logo`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '340');
            image.setAttribute('height', '440');

            businessName.setAttribute('class', 'businessName');
            
            // Append the section with the created elements
            card.appendChild(businessName);
            card.appendChild(image);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);

            cards.appendChild(card);
        });
    }