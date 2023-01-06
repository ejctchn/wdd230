let d = new Date();

let m = d.getMonth();
let day = d.getDate();
let year = d.getFullYear();
let time = d.getTime();
let monthname = "";

//change month from int to Month Name
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

//Finalize date format
let cd = `Last Updated: ${day} ${monthname} ${year}`;
let cr = `&copy; 2023 - Eli Cutchen - Idaho`
//copyright line
document.querySelector('#copyr').innerHTML = cr;
//push date back to HTML
document.querySelector('#updated').innerHTML = cd;
