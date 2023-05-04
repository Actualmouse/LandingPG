const oneCard = {title:"FLIGHT BOOKING", description:"1 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};
const twoCard = {title:"HOTEL/RESORT BOOKING", description:"2 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};
const threeCard = {title:"FAMILY TRIP PLANNER", description:"3 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};
const fourCard = {title:"CRUISE TOUR", description:"4 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};
const fiveCard = {title:"FIRE CAMP", description:"5 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};
const sixCard = {title:"CORPORATE HOLIDAYS", description:"6 Lorem ipsum is simply dummy text of the printing and typesetting industry, Lorem."};

let imgElem
let titleElem
let descElem
let count = 0;

//did somebody touch my SPHAGET!??!?!?
let firstTitle = document.getElementById("titleOne").innerHTML = oneCard.title;
let firstDesc = document.getElementById("descOne").innerHTML = oneCard.description;

let secondTitle = document.getElementById("titleTwo").innerHTML = twoCard.title;
let secondDesc = document.getElementById("descTwo").innerHTML = twoCard.description;

let thirdTitle = document.getElementById("titleThree").innerHTML = threeCard.title;
let thirdDesc = document.getElementById("descThree").innerHTML = threeCard.description;

let fourthTitle = document.getElementById("titleFour").innerHTML = fourCard.title;
let fourthDesc = document.getElementById("descFour").innerHTML = fourCard.description;

let fifthTitle = document.getElementById("titleFive").innerHTML = fiveCard.title;
let fifthDesc = document.getElementById("descFive").innerHTML = fiveCard.description;

let sixthTitle = document.getElementById("titleSix").innerHTML = sixCard.title;
let sixthDesc = document.getElementById("descSix").innerHTML = sixCard.description;


//figures out what has been clicked on and gets its children elements in the global variable 
function reply_click(clicked_id){
    let card = document.getElementById(clicked_id);

    imgElem = card.firstElementChild;
    titleElem = card.firstElementChild.nextElementSibling;
    descElem = card.firstElementChild.nextElementSibling.nextElementSibling;

}

//closes the modal
function closeModal(){
    let modal = document.getElementById("modalPg");
    modal.style.display = "none";
}
//opens the modal
function openModal(){
    let modal = document.getElementById("modalPg");
    modal.style.display = "flex";
}
//determines what to load on the modal depending on which element has been clicked
function reloadContent(){
    let titleSrc = titleElem.innerHTML;
    let descSrc = descElem.innerHTML;

    let modalTitle = document.getElementById("modal-title");
    let modalDesc = document.getElementById("modal-desc")

    let imgSrc = imgElem.src;
    let modalImg = document.getElementById("modal-image");

    modalImg.src = imgSrc;
    modalTitle.innerHTML = titleSrc;
    modalDesc.innerHTML = descSrc;

}


//this basically acts as a counter type of thing to then count how many times the arrow has been clicked
function rotate(){

    count += 1;

    console.log(count);
}

function reverseRotate(){
    count -= 1;

    console.log(count);
}

let title = document.getElementById("h-id");
let image = document.getElementById("bg-image");
let firstSrc = document.getElementById("bg-image").src;
let secondSrc = document.getElementById("bg-second").src;


//alternates between 2 images based on whether youve clicked the arrow even times or odd times
function insertBg(){
    
    if(count%2 == 0){
        image.src = firstSrc;
        title.innerHTML = "Discover Australia";
    }else{
        image.src = secondSrc;
        title.innerHTML = "Discover Greece";
    }
}


//used regex to determine whether the email is valid or not
function selectMail(){
    let mailCheck = document.getElementById("mail").value;  
    console.log(mailCheck);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailCheck))
    {
      return true;
    }else{
       alert("You have entered an invalid email address!");
      return false; 
    }
      
}




//decides whether to make display none or inline block based on the boolean it takes.
let opened = false;

function showMenu(){
    var menu = document.getElementById("nav-div");
    
    opened = !opened;

    if(opened == false){
        menu.style.display = "none";
        
    }else{
        menu.style.display = "inline-block";
        
    }



    //to make sure the menu doesnt stay opened when the window is resized:)
    window.addEventListener('resize', function(event) {
            menu.style.display = "none";
            opened = false;
    }, true);
   
}
