var btn = document.querySelectorAll('[data-animation="ripple"]');

for (var i = 0; i < btn.length; i++) {
  btn[i].onmousedown = function(e) {

    var x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop,
        w = this.offsetWidth;
    
    var ripple = document.createElement('span');
    
    ripple.className = 'ripple';
    ripple.style.left = x + 'px';
    ripple.style.top  = y + 'px';
    ripple.style.setProperty('--scale', w);

    this.appendChild(ripple);

    setTimeout(function() {
      ripple.parentNode.removeChild(ripple);
    }, 500);
  }
}