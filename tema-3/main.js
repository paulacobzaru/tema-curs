let a = "Jane Smith has $12,450 in her bank account.";
let b = "$12,450 is a lot of money.";
let c = "Jane Smith plans to buy a Toyota Yaris.";
let d = "Jane Smith will use her $12,450 to buy a Toyota Yaris.";
let f = "$12,450 is a lot of money for a Toyota Yaris.";
let g = "=";
function createPTag(myText){
  let theNewPTag = document.createElement('p');//<p></p>
  let theText = document.createTextNode(myText);//test text
  document.body.appendChild(theText);//<p>test text</p>
  let elem = document.getElementsByTagName("body")[0];
  elem.appendChild(theNewPTag);//<body><p>test text</p></body>
}
function createBrTag() {
     var br = document.createElement('br');
     var brPar = document.getElementsByTagName("body")[0];
     brPar.appendChild(br);
 } 
function createSpanTag1(g){
  let theNewSpan = document.createElement('span');//<span></span>
  theNewSpan.setAttribute('id','spanId1')
  let spanContent = document.createTextNode(g);
  let el = document.getElementsByTagName("body")[0];
  el.appendChild(theNewSpan);
  let equals = document.getElementById('spanId1');
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
createPTag(a);
createPTag(b);
createPTag(c);
createPTag(d);
createPTag(f);
createBrTag();
createSpanTag1(g);
createBrTag();
createBrTag();
createPTag(b);
createPTag(f);
createPTag(c);
createPTag(a);
createPTag(d);
createBrTag();
createSpanTag2(g);
createBrTag();
createBrTag();
createPTag(c);
createPTag(f);
createPTag(d);
createPTag(a);
createPTag(b);


