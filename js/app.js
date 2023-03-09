let mileSec = 0;
let sec = 0;
let min = 0;
let hour = 0;

function time(){
    const second = setInterval(() => {

        document.getElementById('reset-btn').addEventListener('click',function(){
            clearInterval(second);
            mileSec *= 0;
            sec *= 0;
            min *= 0;
            hour *= 0;
            getElement('mile', mileSec);
            getElement('s', sec);
            getElement('m', min);
            getElement('h', hour);
            console.log(hour, min, sec, mileSec);
        });

        ++mileSec;
        // console.log(mileSec);
        if( mileSec === 100){
            mileSec -= 100;
            ++sec;
            // console.log('sec',sec);
            
            if(sec === 60){
                
                sec -=60;
                ++min;
                // console.log('min',min);
                if(min === 60){
                    min -=60;
                    ++hour;
                    // console.log('Hour' + ':', hour);
                    if(hour === 24){
                        hour -=24;
                    }
                    getElement('h', hour);
                }
                getElement('m', min);
            }
            getElement('s', sec);
        }
        getElement('mile', mileSec);
    },10);
    document.getElementById('stop-btn').addEventListener('click',function(){
        clearInterval(second)
    });
}

function getElement(id, text){
    const element = document.getElementById(id);
    // const elementValue = element.innerText;
    element.innerText = text;
    // console.log(element.innerText);
}
document.getElementById('start-btn').addEventListener('click',function(){
    time();
});


// getElement('h', '6');
// time();