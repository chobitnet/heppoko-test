window.onload = function(){
    document.body.innerText = 'めちゃねむけが'.split('').sort(function(){return Math.random() - .5; }).join('');
}
