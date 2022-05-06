let a = "Jane Smith has $12,450 in her bank account.";
let b = "$12,450 is a lot of money";
let c = "Jane Smith plans to buy a Toyota Yaris.";
let d = "Jane Smith will use her $12,450 to buy a Toyota Yaris.";
let e = " a Toyota Yaris.";
let f = b + " for " + e;

let theNewPTag1 = document.createElement('p');//<p></p>
let theText1 = document.createTextNode(a);
theNewPTag1.appendChild(theText1);//<p>test text</p>
let element1 = document.getElementsByTagName("body")[0];
element1.appendChild(theNewPTag1);//<body><p>test text</p></body>

let theNewPTag2 = document.createElement('p');//<p></p>
let theText2 = document.createTextNode(b + ' .');
theNewPTag2.appendChild(theText2);//<p>test text</p>
let element2 = document.getElementsByTagName("body")[0];
element2.appendChild(theNewPTag2);//<body><p>test text</p></body>

let theNewPTag3 = document.createElement('p');//<p></p>
let theText3 = document.createTextNode(c);
theNewPTag3.appendChild(theText3);//<p>test text</p>
let element3 = document.getElementsByTagName("body")[0];
element3.appendChild(theNewPTag3);//<body><p>test text</p></body>

let theNewPTag4 = document.createElement('p');//<p></p>
let theText4 = document.createTextNode(d);
theNewPTag4.appendChild(theText4);//<p>test text</p>
let element4 = document.getElementsByTagName("body")[0];
element4.appendChild(theNewPTag4);//<body><p>test text</p></body>

let theNewPTag5 = document.createElement('p');//<p></p>
let theText5 = document.createTextNode(b + ' for' + e);
theNewPTag5.appendChild(theText5);//<p>test text</p>
let element5 = document.getElementsByTagName("body")[0];
element5.appendChild(theNewPTag5);//<body><p>test text</p></body>


//==================================================
let theNewSpanTag = document.createElement('span');
theNewSpanTag.setAttribute('id', 'dots')
let element6 = document.getElementsByTagName("body")[0];
element6.appendChild(theNewSpanTag);

let dots = document.getElementById('dots');
dots.style.visibility = 'hidden';
let width, savedContent;
do {
  savedContent = dots.innerHTML;
  dots.innerHTML += '=';
} while(dots.offsetWidth < dots.parentNode.offsetWidth);
dots.innerHTML = savedContent;
dots.style.visibility = 'visible';

//==================================================

/*let theNewPTag6 = document.createElement('p');//<p></p>
let theText6 = document.getSelection(b + ' .');
theNewPTag6.appendChild(theText6);//<p>test text</p>
let element7 = document.getElementsByTagName("body")[0];
element7.appendChild(theNewPTag6);//<body><p>test text</p></body>

let theNewPTag7 = document.createElement('p');//<p></p>
let theText7 = document.createTextNode(b + ' for ' + e);
theNewPTag7.appendChild(theText7);//<p>test text</p>
let element8 = document.getElementsByTagName("body")[0];
element8.appendChild(theNewPTag7);//<body><p>test text</p></body>

let theNewPTag8 = document.createElement('p');//<p></p>
let document = createTextNode(c);
theNewPTag8.appendChild(theText3);//<p>test text</p>
document.getElementsByTagName("body")[0];
element3.appendChild(theNewPTag8);//<body><p>test text</p></body>

let theNewPTag9 = document.createElement('p');//<p></p>
document.createTextNode(a);
theNewPTag9.appendChild(theText1);//<p>test text</p>
document.getElementsByTagName("body")[0];
element1.appendChild(theNewPTag9);//<body><p>test text</p></body>

let theNewPTag10 = document.createElement('p');//<p></p>
document.createTextNode(d);
theNewPTag10.appendChild(theText4);//<p>test text</p>
document.getElementsByTagName("body")[0];
element4.appendChild(theNewPTag10);//<body><p>test text</p></body>

//=================================================

let theNewSpanTag11 = document.createElement('span');
theNewSpanTag.setAttribute('id', 'dots')
let element11 = document.getElementsByTagName("body")[0];
element6.appendChild(theNewSpanTag);

let dots1 = document.getElementById('dots');
dots1.style.visibility = 'hidden';
let width1, savedContent1;
do {
  savedContent1 = dots1.innerHTML;
  dots1.innerHTML += '=';
} while(dots1.offsetWidth < dots1.parentNode.offsetWidth);
dots1.innerHTML = savedContent1;
dots1.style.visibility = 'visible';*/




//Requirements
/*“Jane Smith has $12,450 in her bank account.” a
“$12,450 is a lot of money” b + “.”
“Jane Smith plans to buy a Toyota Yaris.” c
“Jane Smith will use her $12,450 to buy a Toyota Yaris. “ d
“$12,450 is a lot of money“ b + “for” +  “a Toyota Yaris. “ e

=============================================

“$12,450 is a lot of money. “ b
“$12,450 is a lot of money“ b + “ for " + "a Toyota Yaris. “ e 
“Jane Smith plans to buy a Toyota Yaris. “ c
“Jane Smith has $12,450 in her bank account. “ a
“Jane Smith will use her $12,450 to buy a Toyota Yaris. “ d

=============================================

“Jane Smith plans to buy“ g +  “a Toyota Yaris. “ e
“$12,450 is a lot of money“ b + “for” + “a Toyota Yaris.” e
“Jane Smith will use her $12,450 to buy a Toyota Yaris.“ d
“Jane Smith has $12,450 in her bank account.”a
“$12,450 is a lot of money.” b*/



	
/*Tema obligatorie ce necesita creativitate :)
Rezolvati exercitiul de mai sus, incercand sa folositi cat mai putin cod JS (masurat in numar de randuri dar si numar de caractere pe rand).

Tema opțională ce necesita căutări online :)*/


