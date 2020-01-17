/*$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
})
*/
document.addEventListener('contextmenu', event => event.preventDefault());

/*Disable Highlight (Copy Paste)*/

document.onselectstart = new Function('return false');

function dMDown(e) { return false; }

function dOClick() { return true; }

document.onmousedown = dMDown;

document.onclick = dOClick;

$("#document").attr("unselectable", "on");

//disable mouse drag select end

//disable right click - context menu

document.oncontextmenu = new Function("return false");


//disable CTRL+A/CTRL+C through key board start

//use this function


function disableSelectCopy(e) {

// current pressed key

    var pressedKey = String.fromCharCode(e.keyCode).toLowerCase();

    if (e.ctrlKey && (pressedKey == "c" || pressedKey == "x" || pressedKey == "v" || pressedKey == "a")) {

        return false;

    }

}

document.onkeydown = disableSelectCopy;
