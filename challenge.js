function yourageinyear(){
    let currentyr = 2022;
    let birthyr = prompt("Enter your birth year");
    let result = (currentyr - birthyr)*365;
    let answer = document.createTextNode("You are " + result + " days old");
    var h3 = document.createElement('h3');
    h3.setAttribute('id','ageIndays');
    h3.appendChild(answer);
    document.getElementById('result').appendChild(h3);
}

function reset(){
    document.getElementById('ageIndays').remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById("cat-image");
    image.src = "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80";
    div.appendChild(image);
}
