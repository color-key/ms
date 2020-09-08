function setRemSize(){
  var dd = document.documentElement;
  var dc = dd.clientWidth;
  var ss = [750, 7.5];
  dd.style.fontSize = dc > ss[0] ? ss[0] / ss[1] + 'px' : dc / ss[1] + 'px';
}
setRemSize();
window.addEventListener("resize", setRemSize, false);