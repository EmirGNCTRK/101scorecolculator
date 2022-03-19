var takım1 = 0 ;
var takım2 = 0 ;
var el = 1 ;

// let button = document.querySelector(".btn-danger");
// setInterval(function(){
//     button.click()
// },1)

let formDOM = document.querySelector("#Form")
formDOM.addEventListener("submit",puan)

function puan(event){
    event.preventDefault()
    let girdi = document.querySelector("#input1").value
    // console.log(girdi);
    takım1 += parseInt(girdi) ;
    // console.log(takım1);
    localStorage.getItem(input1,girdi.value)
    document.querySelector(".con3").innerHTML = takım1;
    
    document.querySelector(".con1").innerHTML +=`${el}.el/${girdi}--`
    document.getElementById("Form").style.display = "none";
    document.getElementById("Form2").style.display = "";
    let button = document.querySelector(".abcd");
    button.click()
    
    
    
}

let formDOM2 = document.querySelector("#Form2")
formDOM2.addEventListener("submit",puan2)

function puan2(event2){
    event2.preventDefault()
    let girdi2 = document.querySelector("#input2").value
    // console.log(girdi2);
    takım2 += parseInt(girdi2) ;
    // console.log(takım2);
    localStorage.getItem(input2,girdi2.value)
    document.querySelector(".con4").innerHTML = takım2;
    document.querySelector(".con2").innerHTML += `${el}.el/${girdi2}--`
    el +=1
    document.getElementById("Form2").style.display = "none";
    document.getElementById("Form").style.display = "";
    let button2 = document.querySelector(".btn-danger2");
    button2.click()
    document.querySelector("#el").innerHTML = `${el-1}.el bitti`
}
