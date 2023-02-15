const btn = document.querySelector('#submit');
const list = document.querySelector('#list');
const input = document.querySelector('#favchap');

btn.addEventListener("click", function() 
{ 
    if(input.value.length == 0)
    {
        alert("There was nothing entered in text box. Please enter a book and chapter");
    }
    else
    {
        let li = document.createElement("li");
        let deleteB = document.createElement('button');
        li.innerText = input.value;
        deleteB.textContent = '❌';
        li.appendChild(deleteB);
        list.appendChild(li);
        
        document.getElementById('favchap').value = "";

        deleteB.addEventListener("click", function()
        {
            list.removeChild(li);
        })
    }
})

