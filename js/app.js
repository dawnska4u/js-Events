//1. Makin Bacon
/*Create a function named `moreContent` that will initiate the button after clicking on it.

The function will add the following content inside the paragraph with the id of `more`.
*/

var bacon = "Shoulder turducken brisket, kevin swine andouille tri-tip salami tail ham sausage pork loin. Ribeye short loin rump kielbasa pork. Capicola short loin turducken corned beef tongue, chuck leberkas salami frankfurter. Kielbasa fatback pancetta, ground round meatball turducken jowl ribeye alcatra sirloin bacon corned beef beef ribs short loin. Pork belly spare ribs biltong corned beef meatball short ribs tongue alcatra swine drumstick. Biltong shankle kevin, cupim sirloin bresaola brisket. Tail pork belly biltong ball tip tri-tip, pig jerky cow pastrami prosciutto ;ground round bacon capicola tongue meatball.";

function moreContent(){
	//var more = document.getElementById("more"); no need; the more comes from the ID name- see HTML line 19
	more.innerHTML = bacon;
}

/*//2. HTTP
Create a function named `lessContent` that will initiate the `Show Less` link after clicking on it.*/


function lessContent(){
	//var less = document.getElementById("less"); same concept of why not needed as last problem
	less.style.display = "none";

	//you could also do less.HTML = ""; or 
	
}

/*The function will hide the contents in the pargraph with the id of `less` after clicking on the `Show Less` link.*/


//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increae the font size to 150%*/

/*var getBig = document.getElementById("biggie");
getBig.addEventListener(hovering, zoom);*/

function zoom(){
	//var biggie = document.getElementById("biggie"); not needed per same as above
	biggie.style.fontSize = "150%";

	}


//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph the the id of `menu` after clicking on the showMenu paragraph.*/

var menuItems = [" oatmeal ",  " egg mcmuffin ", " mcflurry"];
//var menu = document.getElementById("menu");
//menu.addEventListener(click, valueMenu);
// no need because the function is already in the HTML; just need the function; 

function valueMenu(){
 menu.innerHTML = menuItems;  

}


//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 20px after clicking on the text.*/
function redFace(){
	var colorFont = document.getElementById("drink");
	colorFont.style.color = "red";
	colorFont.style.fontSize = "20px";
}

//another option:
//function redFace(){
//	drink.style.color = "red";
//	etc
//}


//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/

function showPrice(){
	var price = document.getElementById("price");
	price.innerHTML = "$5.55";
}


//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/

//this one has not function already in the html so must make it from scratch
var myQuote = "Our lives are defined by opportunities; even the ones we miss.";
var benjamin = document.getElementById("Benjamin");
benjamin.addEventListener("click", mrButtons);
// the shortcut for these two lines is Benjamin.addEventListeners("click", mrButtons)
function mrButtons(){
	displayQuote.innerHTML = myQuote; //this is the shortcut to what you have been normally doing
}


//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];

var randomQuote = document.getElementById("random");
randomQuote.addEventListener("click", sayAgain);
// shortcut for this is random.addEventListener("click", sayAgain);


var X = Math.floor(Math.random() * 4);

//console.log(quotes[X]);


function sayAgain(){
 displayQuotes.innerHTML = quotes[X];
}

//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clicking on the button.
*/

//block = get the tag block
//inline = puts the data next to the button; these are similar to css code that we used previously

showHide.addEventListener("click", toggle);

function toggle(){
	var answer = document.getElementById("showmoney");
	if(answer.style.display === "none"){
		answer.style.display = "block";
	} else{
		answer.style.display = "none";
	}
}

toggle();




