let y = document.getElementById("input")
let Vie = ["Xin chào","Tạm biệt","Hẹn gặp lại"];
var x;
let Eng = ["Hello","Good bye", "See you again"];
let result;


function translate(){
    for(x=0;x<Vie.length;x++){
        if (y == (Vie[x])){
            result = Eng[x];
        }
        else{
            result = "Không tìm thấy từ này trong từ điển"
        }
    }
    document.getElementById("result").innerText= result
}
