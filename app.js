let takım1 = 0 ;
let takım2 = 0 ;
let el = 1 ;
let say = 1 ;
let tablo = 3;
let renk =1;

let formDOM = document.querySelector("#Form")
formDOM.addEventListener("submit",puan)

// function puan(event){
//     event.preventDefault()
//     let girdi = document.querySelector("#input1").value
//     // console.log(girdi);
//     takım1 += parseInt(girdi) ;
//     // console.log(takım1);
//     localStorage.getItem(input1,girdi.value)
//     document.querySelector(".con3").innerHTML = takım1;
    
//     document.querySelector(".con1").innerHTML +=`${el}.el=(${girdi})|!|   `
//     // document.getElementById("Form").style.display = "none";
//     // document.getElementById("Form2").style.display = "";
//     let button = document.querySelector(".abcd");
//     button.click()   
// }


function puan(event){
    event.preventDefault()
    let girdi = document.querySelector("#input").value;
    localStorage.getItem(input,girdi.value)
    if(girdi === ""){
        alert("PLEASE ENTER NUMBER!!")
    }

    else{

        if(say > 0){
            takım1 += parseInt(girdi) ;
            document.querySelector(".con1").innerHTML +=`${el}.el=(${girdi})|!|<br><hr>`
            let button = document.querySelector(".abcd");button.click()
            document.querySelector("#takımsay").innerHTML = "TEAM 2"
            document.querySelector(".con3").innerHTML = takım1;
            document.querySelector("#container").style.gridTemplateRows = `${tablo}rem 0rem 9rem 3rem 0rem`
            say += -2
        }
        else{
            takım2 += parseInt(girdi) ;
            document.querySelector(".con2").innerHTML +=`${el}.el=(${girdi})|!|<br><hr>`
            let button = document.querySelector(".abcd");button.click()
            document.querySelector(".con4").innerHTML = takım2;
            document.querySelector("#takımsay").innerHTML = "TEAM 1"
            say += 2
            el += 1
            document.querySelector("#el").innerHTML = `${el-1}.el bitti`
            tablo+=2.25
            document.querySelector(".con1").style.backgroundcolor = "red"
            // selamlar
        }
        
    }
}
