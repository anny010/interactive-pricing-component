let viewer=document.getElementById("view");
var monthPrice=document.getElementById("month-price");
let month=document.getElementById("which");
let check=document.getElementById("check");
let range=document.querySelector(".switch");
let Checkbox = document.querySelector(".switch input");
let velueCount=8;
console.log(Checkbox);
const backColor=document.getElementById("ranger").oninput=function(){
    const value=(this.value-this.min)/(this.max-this.min)*100;
    this.style.background='linear-gradient(to right, #A4F3EB 0%, #ECF0FB ' + value + '%, #fff ' + value + '%, white 100%)';




    velueCount = +this.value;
    
    let count = velueCount*12;

    let result= count-(count*0.25);
    console.log(Checkbox.checked);

    if(this.value==0){
        viewer.firstElementChild.textContent='0';
        monthPrice.textContent=`0$`;
    }

    if(this.value == 8) {
        if (Checkbox.checked) {
        viewer.firstElementChild.textContent='10';
        monthPrice.textContent=`${result}$`; 
    }else{
        viewer.firstElementChild.textContent='10';
        monthPrice.textContent=`${this.value}$`;}
    }

    if (this.value==12){
        if (Checkbox.checked) {
            viewer.firstElementChild.textContent='50';
            monthPrice.textContent=`${result}$`;
        }else{
            viewer.firstElementChild.textContent='50';
            monthPrice.textContent=`${this.value}$`;
        }
    }
        if (this.value==24){
            if (Checkbox.checked) {
                viewer.firstElementChild.textContent='100';
                monthPrice.textContent=`${result}$`;
            }else{
                viewer.firstElementChild.textContent='100';
                monthPrice.textContent=`${this.value}$`;    
    }
}


        if (this.value==36){
            if (Checkbox.checked) {
                viewer.firstElementChild.textContent='1000';
                monthPrice.textContent=`${result}$`;
            }else{
                viewer.firstElementChild.textContent='1000';
                monthPrice.textContent=`${this.value}$`;
            }
}
}


range.addEventListener('input',(Event)=> {

    let count = velueCount * 12;
    let result = count - (count * 0.25);


    if (!Event.target.checked){
       month.innerHTML= "/month";
       monthPrice.innerHTML= `${velueCount}$`;

    } else if (Event.target.checked){
        month.innerHTML="/ Year";
        monthPrice.innerHTML= `${result}$`;
    }
          
       });