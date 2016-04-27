function transform(elSrc, targId, t) {//should only work with abs pos
    var aniT = t;
    var srcPar = elSrc.parentElement;
    
    var targEl = document.createElement('div');
    targEl.id = targId;
    //width mutilator
    var tW = 0, tH = 0;
    var tWM = (targEl.style.width-elSrc.style.width);
    var pWM;
    
    if(tWM < 0)
        pWM = -1;
    else
        pWM = 1;
    //height mutilator
    var tHM = (targEl.style.height-elSrc.style.height);
    var pHM;
    
    if(tHM < 0)
        pHM = -1;
    else
        pHM = 1;
    //x pos mutilator
    var tXM = (targEl.style.left-elSrc.style.left);
    var pXM;
    
    if(tXM < 0)
        pXM = -1;
    else
        pXM = 1;
    //y pos mutilator
    var tYM = (targEl.style.top-elSrc.style.top);
    var pYM;
    
    if(tYM < 0)
        pYM = -1;
    else
        pYM = 1;
    
    var iW = 0, iH = 0, iX = 0, iY = 0;
    var id = setInterval (frame, aniT);
    function frame() {
        if (iW == targEl.width &&
            iH == targEl.height &&
            iX == targEl.offsetLeft &&
            iY == targEl.offsetTop) {clearInterval(id);} 
        if (iW != targEl.width){iW+=pWM; elSrc.style.width = iW + 'px';}
        if (iH != targEl.height){iH+=pHM; elSrc.style.height = iH + 'px';}
        if (iX != targEl.offsetLeft){iX+=pXM; elSrc.style.offsetLeft = iX + 'px';}
        if (iY != targEl.offsetTop){iY+=pYM; elSrc.style.offsetTop = iY + 'px';}
    }
}
function myMove(){
    
}