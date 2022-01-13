function translate() {
    let y = document.getElementById("input");
    let x;
    let Vie = ["Xin chào", "Tạm biệt", "Hẹn gặp lại"];
    let Eng = ["Hello", "Good bye", "See you again"];
    let result = -1
    for(x=0;x<Vie.length;x++){
        if (y == (Vie[x])){
            result = x;
            break;
        }
    }
    if (result == -1){
        alert("Từ bạn nhập không tồn tại trong từ điển");
    }
    else{
        alert(Eng[x]);
    }

}


