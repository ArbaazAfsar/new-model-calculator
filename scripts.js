function btnclick(v){
    document.getElementById('screen').value+=v
}

function cleardspl(){
    document.getElementById('screen').value=""
}

function equleto(){

    var text=document.getElementById('screen').value
    var result = eval(text)
    document.getElementById('screen').value=result
    
}
