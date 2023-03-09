let mileSec = 0;
let sec = 0;
let min = 0;
let hour = 0;

function time(){
    const second = setInterval(() => {
        
        // Code for Reset
        document.getElementById('reset-btn').addEventListener('click',function(){

            // Enable Start Button
            const btn = document.getElementById('start-btn');
            btn.disabled = false;
            
            clearInterval(second);

            // set all value Zero.
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

        // Mile-Second Area
        ++mileSec;
        if( mileSec === 100){
            mileSec -= 100;

            // Second Area
            ++sec;            
            if(sec === 60){
                sec -=60;

                // minute Area
                ++min;
                if(min === 60){
                    min -=60;

                    // Hour Area
                    ++hour;
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

    // Stop Button
    document.getElementById('stop-btn').addEventListener('click',function(){
        const btn = document.getElementById('start-btn');
        btn.disabled = false;
        clearInterval(second)
    });
}

// Set Inner Text
function getElement(id, text){
    const element = document.getElementById(id);
    element.innerText = text;
}

// Start Button
document.getElementById('start-btn').addEventListener('click',function(){
    // disable start button
    const btn = document.getElementById('start-btn');
    btn.disabled = true;
    time();
});
