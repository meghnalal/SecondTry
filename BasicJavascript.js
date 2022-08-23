var today = new Date();
var hourNow = today.getHours();
var greetings;

if(hourNow >18) {
    greeting = 'Good Evening'
} else if (hourNow>22){
    greetings ='Good Night'
} else if (hourNow>12){
    greetings ='Good Afternoon'
}else {
    greetings ='Welcome'
}

document.write('<h3>' + greetings + '</h3>')


//creat area function 
let x = areaRectangle(4, 3)

function areaRectangle (base, lato){
    var area = base*lato 
    print(area)
}