/*Requirements - Tema 3
1.Tema obigatorie si simpla:
In proiectul tema-curs, 
intr-o pagina ce se deschide din meniul Tema 3 
(vezi tema de la cursul 2), afisati urmatorul text: 
ATENTIE! Nu se va scrie textul cerut in HTML, 
vom folosi doar JavaScript (JS)

“Jane Smith has $12,450 in her bank account.” a
“$12,450 is a lot of money” b + “.”
“Jane Smith plans to buy a Toyota Yaris.” c
“Jane Smith will use her $12,450 to buy a Toyota Yaris. “ d
“$12,450 is a lot of money“ b + “for” +  “a Toyota Yaris. “ e

=============================================

“$12,450 is a lot of money“ b + "."
“$12,450 is a lot of money“ b + “ for " + "a Toyota Yaris. “ e = f
“Jane Smith plans to buy a Toyota Yaris. “ c
“Jane Smith has $12,450 in her bank account. “ a
“Jane Smith will use her $12,450 to buy a Toyota Yaris. “ d

=============================================

“Jane Smith plans to buy“ g +  “a Toyota Yaris. “ e
“$12,450 is a lot of money“ b + “for” + “a Toyota Yaris.” e=f
“Jane Smith will use her $12,450 to buy a Toyota Yaris.“ d
“Jane Smith has $12,450 in her bank account.”a
“$12,450 is a lot of money.” b

2. Tema obligatorie ce necesita creativitate :)
Rezolvati exercitiul de mai sus, incercand sa folositi 
cat mai putin cod JS 
(masurat in numar de randuri dar si numar de caractere pe rand).

3. Tema optionala ce necesita cautari on-line:
Cautati online cum se declara si se folosesc functiile in JavaScript. 
Folositi, apoi, functii pentru scrierea textului de la punctele 1 si 2 ale temei. 
O functie poate sa fie utilizata pentru a scrie paragrafe intregi. 
Alte functii pot fi utilizate pentru a scrie cate un rand din paragraf. 
Parametrii funcției, adica datele pe care functia de primeste, 
ar putea fi textele comune, puse in variabile.*/

let a = "Jane Smith has $12,450 in her bank account.";
let b = "$12,450 is a lot of money";
let c = "Jane Smith plans to buy a Toyota Yaris.";
let d = "Jane Smith will use her $12,450 to buy a Toyota Yaris.";
let e = " a Toyota Yaris.";
let f = b + " for " + e;
let g = "="

function createPTag(myText){
  let theNewPTag = document.createElement('p');//<p></p>
  let theText = document.createTextNode(myText);//test text
  document.body.appendChild(theText);//<p>test text</p>
  let elem = document.getElementsByTagName("body")[0];
  elem.appendChild(theNewPTag);//<body><p>test text</p></body>
}

function createBrTag() {
  //Create an input type dynamically.
     var br = document.createElement('br');
     var foo = document.getElementsByTagName("body")[0];
     foo.appendChild(br);
 } 

function createSpanTag1(g){
  let theNewSpan = document.createElement('span');//<span></span>
  theNewSpan.setAttribute('id','spanId1')
  let spanContent = document.createTextNode(g);
  let el = document.getElementsByTagName("body")[0];
  el.appendChild(theNewSpan);
  //let mySpanId = document.getElementsById('spanId').style.width = '100%';
  let equals = document.getElementById('spanId1');
  //document.getElementsByClass('spanClass');
  //for(let x = 0; x < equals.length; x++){
  //  if(equals[x].style.visibility="hidden");
  //}
  //document.style.visibility = "hidden";
  equals.style.visibility = "hidden";
  let width, savedContent;
  do{
    savedContent = equals.textContent;
    equals.textContent += '=';
  }
  while(equals.offsetWidth < equals.parentNode.offsetWidth);
  equals.textContent = savedContent;
  equals.style.visibility = 'visible';
}

function createSpanTag2(g){
  let theNewSpan = document.createElement('span');//<span></span>
  theNewSpan.setAttribute('id','spanId2')
  let spanContent = document.createTextNode(g);
  let el = document.getElementsByTagName("body")[0];
  el.appendChild(theNewSpan);
  let equals = document.getElementById('spanId2');
  equals.style.visibility = "hidden";
  let width, savedContent;
  do{
    savedContent = equals.textContent;
    equals.textContent += '=';
  }
  while(equals.offsetWidth < equals.parentNode.offsetWidth);
  equals.textContent = savedContent;
  equals.style.visibility = 'visible';
}

let p1 = createPTag(a);
let p2 = createPTag(b + '.');
let p3 = createPTag(c);
let p4 = createPTag(d);
let p5 = createPTag(f);

let p6 = createBrTag();
let p7 = createSpanTag1(g);
let p8 = createBrTag();
let p9 = createBrTag();

let p10 = createPTag(b + '.');
let p11 = createPTag(f);
let p12 = createPTag(c);
let p13 = createPTag(a);
let p14 = createPTag(d);

let p15 = createBrTag();
let p16 = createSpanTag2(g);
let p17 = createBrTag();
let p18 = createBrTag();

let p19 = createPTag(c);
let p20 = createPTag(f);
let p21 = createPTag(c);
let p22 = createPTag(d);
let p23 = createPTag(c);


