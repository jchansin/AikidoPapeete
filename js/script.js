function adjustOffset() {
    let checkForAlert=Boolean(document.getElementsByClassName('alert'));
    if(checkForAlert) {
        let elem=document.getElementById('mainContent');
        let cs=document.defaultView.getComputedStyle(elem, null);
        let offsetValue = cs.getPropertyValue('padding-top');

        offsetValue = "250px";
        elem.style.paddingTop=offsetValue;
    }
}

function resetOffsetToDefault() {
    let elem=document.getElementById('mainContent');
    let cs=document.defaultView.getComputedStyle(elem, null);
    let offsetValue = cs.getPropertyValue('padding-top');

    offsetValue = "200px";
    elem.style.paddingTop=offsetValue;
}
