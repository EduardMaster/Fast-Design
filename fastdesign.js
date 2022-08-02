const atributesMap = {
  f: "fontFamily",
  ta: "textAlign",
  td: "textDecoration",
  fs: "fontSize",
  fw: "fontWeight",
  w: "width",
  h: "height",
  b: "border",
  bs: "borderRadius",
  z: "zIndex",
  c: "color",
  bg: "background",
  p: "padding",
  m: "marging",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  mt: "marginTop",
  ml: "marginLeft",
  mr: "marginRight",
  mb: "marginBottom",
  vr: "right",
  vl: "left",
  vt: "top",
  vb: "bottom",
  ls: "listStyle",
};

function aplicateCSS(element) {
  console.log("Elemento: ", element);
  const cssRules = element.className.split(" ");
  if (cssRules.length >= 1) {
    for (let cssRule of cssRules) {
      const ruleParts = cssRule.split("-");
      if (ruleParts.length == 2) {
        const atr = atributesMap[ruleParts[0]];
        const newValue = ruleParts[1];
        console.log(" Alterando atributo: " + atr + " para valor: " + newValue);
        element.style[atr] = newValue;
      }
    }
  }
  if (element.children.length > 0) {
    for (let children of element.children) {
      aplicateCSS(children);
    }
  }
}
function start() {
  console.log("Iniciando alterações de CSS");
  aplicateCSS(document.body);
  let defaultCSS = document.getElementById("defaultCSS");
  if (!defaultCSS) {
    defaultCSS = document.createElement("link");
    defaultCSS.rel = "stylesheet";
    defaultCSS.href = "default.css";
    document.head.appendChild(defaultCSS);
  }
}

start();
