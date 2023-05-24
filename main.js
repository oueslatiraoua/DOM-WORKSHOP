//**********DOM SELECTORS*********//

// var elementId = document.getElementById("Morning").innerHTML;
// console.log(elementId);
// var elementClass = document.getElementsByClassName("greeting")[0];
// console.log(elementClass);

// var elementH1 = document.getElementsByTagName("h1");
// console.log(elementH1);
// var elementH1 = document.querySelector(".greeting");
// console.log(elementH1);
// var elementH1 = document.querySelectorAll(".greeting")[1];
// console.log(elementH1);

//**********DOM ATTRIBUTE*********//

// var el = document.getElementById("Morning");
// console.log(el);
// var GetStyle = el.getAttribute("class");
// console.log(GetStyle);
// var GetClass = el.setAttribute("class", "hello");
// console.log(el);
// el.removeAttribute("class");
// console.log(el)
// var GetStyle = el.getAttribute("class");
// console.log(GetStyle);

//**********DOM MANIPULATION*********//
// var el = document.getElementById("Morning");

// ***Appling styles on element***

// el.style.color = "green";
// el.style.fontSize = "50px";
// el.style.fontWeight = "bold";

// ***Getting inner HTML contents***

// var contents = document.getElementById("Morning").innerHTML;
// console.log(contents);

// ***Setting inner HTML contents***

// var el = document.getElementById("Morning");
// el.innerHTML = "<p>Hello</p>";
// console.log(el);

//*** Remove Elements ***
// var main = document.getElementsByTagName("section")[0];
// var child = document.getElementsByTagName("p")[0];
// console.log(child);
// main.removeChild(child);

// ***Create a new div element***

// var newDiv = document.createElement("div");
// console.log(newDiv);

// ***Create text Node***
// var newContent = document.createTextNode("Hi");
// console.log(newContent);
// ***Add text Node to the div***
// newDiv.appendChild(newContent);
// document.body.appendChild(newDiv);
//** Event Types**
// MouseEvent: mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, and contextmenu
// KeyboardEvent: keydown, keypress, and keyup
// Form events: focus, blur, change, and submit
// Window events: scroll, resize, hashchange, load, and unload

// input = document.getElementsByTagName("input")[0];
// input.addEventListener("keyup", () => console.log("clicked"));

var text = document.getElementById("input");
var para = document.getElementsByTagName("div")[0];
var btn = document.getElementsByTagName("button")[0];
console.log(btn);
btn.addEventListener("click", (e) => {
  var Res = document.createElement("div");
  console.log(Res);
  Res.innerText = text.value;
  para.appendChild(Res);
  console.log(para);
});
