// Baisse la position du contenu de la page si class="alert" est détecté
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

// Remonte la position du contenu de la page quand l'alerte est fermée
function resetOffsetToDefault() {
    let elem=document.getElementById('mainContent');
    let cs=document.defaultView.getComputedStyle(elem, null);
    let offsetValue = cs.getPropertyValue('padding-top');

    offsetValue = "200px";
    elem.style.paddingTop=offsetValue;
}
