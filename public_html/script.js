function submit() {
    var cricket_val = Number(document.getElementById("cricket").value) % 2;
    var swimming_val = Number(document.getElementById("swimming").value) % 2;
    var music_val = Number(document.getElementById("music").value) % 2;
   
    
    const ids = ["cricket", "swimming", "music"];
    const items = ["cricket", "swimming", "music"];
    const inputs = [cricket_val, swimming_val, music_val];
    const divs = ["cricket-info", "swimming-info", "music-info"];
    var output = "You choose : \n";
    for (var i = 0; i <items.length; i++){
        if (inputs[i]){
            if (!scroll){
                scroll = divs[i];
            }
            output = output.concat(items[i].concat("\n"));    
        }
    }
    
    alert(output);
    var scroller = false;
    for (var i = 0; i < items.length; i++){
        if (inputs[i]){
            document.getElementById(divs[i]).className = "";
            if (scroller == false) scroller = divs[i];
        }
        else{
            document.getElementById(divs[i]).className = "d-none";
        }
    }

    document.getElementById(scroller).scrollIntoView();
}

function inc(id) {
    document.getElementById(id).value  = (Number(document.getElementById(id).value) + 1);
}