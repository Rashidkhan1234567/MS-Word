const area = document.getElementById("text");
const btn_Bold = document.getElementById("bold");
const btn_Italic = document.getElementById("italic");
const btn_Underline = document.getElementById("underline");
const select = document.getElementById("font_size");
const colorChanger = document.getElementById("color");
const theme2 = document.getElementById("changer");
const fontChanger = document.getElementById("font_family");
const caseChanger = document.getElementById("casechanger");

function bold() {
  if (area.style.fontWeight == "bold") {
    area.style.fontWeight = "normal";
    btn_Bold.style.color = "red";
  } else {
    area.style.fontWeight = "bold";
    btn_Bold.style.color = "green";
  }
}

function italic() {
  if (area.style.fontStyle == "italic") {
    area.style.fontStyle = "normal";
    btn_Italic.style.color = "red";
  } else {
    area.style.fontStyle = "italic";
    btn_Italic.style.color = "green";
  }
}

function underline() {
  if (area.style.textDecoration == "underline") {
    area.style.textDecoration = "none";
    btn_Underline.style.color = "red";
  } else {
    area.style.textDecoration = "underline";
    btn_Underline.style.color = "green";
  }
}

//    change font size

select.addEventListener("input", () => {
  area.style.fontSize = select.value;
  select.style.color = "green";
});

colorChanger.addEventListener("input", () => {
  area.style.color = colorChanger.value;
  colorChanger.style.color = "green";
});

// function saper(){
//     if(area.style.verticalAlign == "super"){
//         area.style.verticalAlign = "normal"
//     }else{
//         area.style.verticalAlign = "super"

//     }
// }

function theme() {
  if (area.style.backgroundColor == "white") {
    area.style.backgroundColor = "black";
    area.style.color = "white";
    theme2.innerHTML = "Light Mode ";
    theme2.style.backgroundColor = "white";
    theme2.style.color = "black";
    theme2.style.boxShadow = "0px 0px 10px #c2c2c2";
    area.style.border = "2px solid green";
  } else {
    area.style.backgroundColor = "white";
    area.style.color = "black";
    theme2.innerHTML = "Dark Mode ";
    theme2.style.backgroundColor = "black";
    theme2.style.color = "white";
    theme2.style.boxShadow = "0px 0px 10px #000";
  }
}

fontChanger.addEventListener("input", () => {
  area.style.fontFamily = fontChanger.value;
  fontChanger.style.color = "green";
});

caseChanger.addEventListener("input", () => {
  if (caseChanger.value == "default") {
    area.style.textTransform = "none";
  } else {
    area.style.textTransform = caseChanger.value;
    caseChanger.style.color = "green";
  }
});
