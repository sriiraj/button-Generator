const testlabel = document.getElementById("testlabel");
const buttonlabel = document.getElementById("buttonlabel");
const fontsize = document.getElementById("fontsize");
const fontcolor = document.getElementById("fontcolor");
const paddingtop = document.getElementById("paddingtop");
const paddingright = document.getElementById("paddingright");
const paddingdown = document.getElementById("paddingdown");
const paddingleft = document.getElementById("paddingleft");
const buttonbackground = document.getElementById("buttonbackground");
const bordercolor = document.getElementById("bordercolor");
const borderwidth = document.getElementById("borderwidth");
const borderradius = document.getElementById("borderradius");
const letterspacing = document.getElementById("letterspacing");
const generatecodebtn = document.getElementById("btn");
const htmltext = document.getElementById("htmltext");
const csstext = document.getElementById("csstext");
let btnLabelValue = "Test button",fontSizeValue = 16,fontColorValue = "black",padTop = 1,padLeft = 6,padRight = 6,
padBottom = 1,bgColorValue = "#dddddd",borderColorValue = "#dddddd",borderWidthValue = 0,borderRadiusValue = 0,letterSpacingValue = 0;

buttonlabel.addEventListener("keyup", e => {
  if (e.target.value.length != 0) {
    testlabel.innerHTML = e.target.value;
    btnLabelValue = e.target.value;
  } else {
    testlabel.innerHTML = btnLabelValue;
  }
});

fontsize.addEventListener("input", e => {
  fontSizeValue = e.target.value + "px";
  testlabel.style.fontSize = fontSizeValue;
});

fontcolor.addEventListener("change", e => {
  fontColorValue = e.target.value;
  testlabel.style.color = fontColorValue;
});

paddingtop.addEventListener("input", e => {
  padTop = e.target.value + "px";
  testlabel.style.paddingTop = padTop;
});

paddingright.addEventListener("input", e => {
  padRight = e.target.value + "px";
  testlabel.style.paddingRight = padRight;
});

paddingdown.addEventListener("input", e => {
  padBottom = e.target.value + "px";
  testlabel.style.paddingBottom = padBottom;
});

paddingleft.addEventListener("input", e => {
  padLeft = e.target.value + "px";
  testlabel.style.paddingLeft = padLeft;
});

buttonbackground.addEventListener("change", e => {
  bgColorValue = e.target.value;
  testlabel.style.backgroundColor = bgColorValue;
});

bordercolor.addEventListener("change", e => {
  borderColorValue = e.target.value;
  testlabel.style.borderColor = borderColorValue;
});

borderwidth.addEventListener("input", e => {
  borderWidthValue = e.target.value + "px";
  testlabel.style.borderWidth = borderWidthValue;
});

borderradius.addEventListener("input", e => {
  borderRadiusValue = e.target.value + "px";
  testlabel.style.borderRadius = borderRadiusValue;
});

letterspacing.addEventListener("input", e => {
  letterSpacingValue = e.target.value + "px";
  testlabel.style.letterSpacing = letterSpacingValue;
});

generatecodebtn.addEventListener("click", () => {
  htmltext.innerText = `<button id="testlabel">${btnLabelValue}</button>`;
  csstext.textContent = "#testlabel{\n font-size:"+fontSizeValue+"px;\nfont-color:"+fontColorValue+"\npadding:"+padTop+"px "+padRight+"px "+padBottom+"px "+padLeft+
                        "px;\nbackground-color:"+bgColorValue+";\nborder-color:"+borderColorValue+";\nborder-width:"+borderWidthValue+"px;\nborder-radius:"+
                        borderRadiusValue+"px;\nletter-spacing:"+letterSpacingValue+"px";
  
});