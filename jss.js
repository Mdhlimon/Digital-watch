let sec=0;
const second = setInterval(() => {
    ++sec;
    console.log('sec',sec);
    if(sec === 100){
        console.log(sec);
        clearInterval(second);

    }
},10);