function digitalTime(){
    const currentDate = new Date();
    const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();
    let d = currentDate.getDay();
    let mt = currentDate.getMonth();
    let dt = currentDate.getDate();
    let y = currentDate.getFullYear();
    
    // console.log(y);
    
    h = changeTime(h);

    

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    // const th1 = document.getElementsByTagName('th')[0];
    // const th2 = document.getElementsByTagName('th')[1];
    // const th3 = document.getElementsByTagName('th')[2]; 

    // th1.innerHTML=h;
    // th2.innerHTML=m;
    // th3.innerHTML=s;

    document.getElementsByTagName('span')[0].innerHTML=h+":"+m+":"+s;
    document.getElementsByTagName('span')[2].innerHTML=days[d-1]+","+dt+" "+months[mt-1]+","+y;

    setTimeout(digitalTime,1000);
};

function changeTime(h) {
    if (h > 12) {
        h = h - 12;
        document.getElementsByTagName('span')[1].innerHTML="PM"
        return h;
    }
    else{
        document.getElementsByTagName('span')[1].innerHTML="AM"
        return h;
    }
}

function checkTime(i){
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};