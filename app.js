
//  Strings Array====================================================

var personal=["Huzaifa","Hamza","Ali"];

// Numbers Array======================================================

var numbers=[1,3,5,7,9];

// Boolean Array=====================================================

var bool=[true,false];

// Mixed Array========================================================

var mixed=[3,5,"Huzaifa",true];

// Array for mobile networks==========================================

var networks=["zong " ,"ufone","jazz","telenor"];

// Array for education==================================================

var education=["Pre-primary","</br>"+"Primary","</br>"+"Middle","</br>"+"SSC","</br>"
+"HSSC","</br>"+"Bachelors","</br>"+"Masters","</br>"+"PhD"];

document.write("<h1>Qualifications:</h1> " );
document.write("<h3>" + education +  "</h3>" );

// Array for movies of 2015=====================================================

var movies=["Avengers:Age of Ultron","</br>"+"Spectre","</br>"+"Jurassic World","</br>"+"Inside Out"];

document.write("<h1>Top movies of 2015:</h1> " );
document.write("<h3>"+ movies + "</h3>")
document.write("<h1>Length of Array:" + movies.length + "</h1>");

// Array for my favourite cars=======================================================

var cars=["Audi",  "Lamborghini" ,  "BMW" , "Rivo" ];
document .write("<h1>Favourite Cars:</h1>");
document .write("<h3>First index of an array:"+ cars.indexOf("Audi") + "</h3>");
document .write("<h3>Car at first index of an array:"+ cars[0] + "</h3>");
document .write("<h3>Last index of an array:"+ cars.indexOf("Rivo") + "</h3>");
document .write("<h3>Car at last index of an array:"+ cars[3] + "</h3>");


// Array for Marksheet==============================================================

var namee=["Ali","Hamza","Ahmed"];
var score=[320,230,480];
var percentage1=320/500*100;
var percentage2=230/500*100;
var percentage3=480/500*100;

document.write("<h1>Percnatges of students</h1>" );
document.write("<h3>Score of "+namee[0] + " is " + score[0] +". " + "Percentage: " +
percentage1 + "%" +"</h3>" );

document.write("<h3>Score of "+namee[1] + " is " + score[1] +". " + "Percentage: " +
percentage2 + "%" +"</h3>" );

document.write("<h3>Score of "+namee[2] + " is " + score[2] +". " + "Percentage: " +
percentage3 + "%" +"</h3>" );


// Program for adding and removig array==========================================

// var color=["Green", "</br>" + "Blue", "</br>" +"Red", "</br>" +"Yellow", "</br>" +"Brown" ];

// document.write("<h1>Colors:</h1>");
// document.write("<h3>"+color+"</h3>");

// var ask=prompt("Which color you want add to the beginning");


// Program for sorting array===========================================================

var scores=[320,222,256,456,123,129];


document.write("</br>"+"<h3>Scores of students:"+ scores+"</h3>")
document.write("<h3>Ordered scores of students:" + scores.sort() + "</h3>");


// Program for sorting strings array================================================

var fruits = ["strawberry", "apple", "orange", "banana"];
document.write("</br>"+"<h3>Fruits list:"+ fruits+"</h3>")
document.write("<h3>Ordered list of fruitss:" + fruits.sort() + "</h3>");


// Program of cities name========================================================

var cities=["Karachi","Lahore","Quetta","Islamabad","Peshawar"];
document.write("</br>"+"<h1>Cities<h1>");
document.write("<h3>"+cities + "</h3>");
var selectedCities=cities.splice(2,2);

document.write("<h1>Selected Cities<h1>");
document.write("<h3>"+selectedCities + "</h3>");


// Arrays Join Method===========================================================

var arr = ["This ", " is ",  "my ",  "cat"];


document.write("<h1> Array </h1>");
document.write("<h3>" + arr + "</h3>");
var sti= arr.join("");
document.write("<h1> String </h1>");
document.write("<h3>" + sti + "</h3>");
document.write("</br>");






// Program for first in first out================================================

var devices=["keyboard","mouse","monitor","printer"];

document.write("<h1> Devices </h1>");
document.write("<h3>" + devices + "</h3>");

document.write("<h1> Out </h1>");
document.write(devices.shift());

document.write("<h1> Out </h1>");
document.write(devices.shift());


document.write("<h1> Out </h1>");
document.write(devices.shift());


document.write("<h1> Out </h1>");
document.write(devices.shift());

document.write("</br>");
document.write("</br>");






// Program for last in first out=====================================================

var devices=["keyboard","mouse","monitor","printer"];

document.write("<h1> Devices </h1>");
document.write("<h3>" + devices + "</h3>");

document.write("<h1> Out </h1>");
document.write(devices.pop());

document.write("<h1> Out </h1>");
document.write(devices.pop());

document.write("<h1> Out </h1>");
document.write(devices.pop());

document.write("<h1> Out </h1>");
document.write(devices.pop());

document.write("</br>");
document.write("</br>");








// Arrays dropdown======================================================================

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(`
    "<h1>Array Dropdown </h1>"
    
    <select>
        <option>${phones[0]}</option>
        <option>${phones[1]}</option>
        <option>${phones[2]}</option>
        <option>${phones[3]}</option>
        <option>${phones[4]}</option>
        <option>${phones[5]}</option>
    </select>
    
`);





















       
        





