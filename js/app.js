let sec = 0;
let min = 0;
let hour = 0;
function time(){
    const second = setInterval(() => {
        ++sec;
        console.log('sec',sec);
        
        if(sec === 60){
            
            sec -=60;
            ++min;
            console.log('min',min);
            if(min === 60){
                min -=60;
                ++hour;
                console.log('Hour' + ':', hour);
                if(hour === 24){
                    hour -=24;
                }
                getElement('h', hour);
            }
            getElement('m', min);
        }
        getElement('s', sec);
    },1000);
}

function getElement(id, text){
    const element = document.getElementById(id);
    // const elementValue = element.innerText;
    element.innerText = text;
    console.log(element.innerText);

}
// getElement('h', '6');
time();