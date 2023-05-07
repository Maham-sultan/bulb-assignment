function bulbToggle()
{
    let bulb = document .getElementById('lightbulb');

    if(bulb.scr.match('bulboff')){
        bulb.scr='bulbon.jpg';
    } else {
        bulb.scr= 'bulboff.jpg'
    }
}