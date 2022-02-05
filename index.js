setInterval(time, 1000);
setInterval(space, 1000);

function time() {
    let a = new Date();
    var b, c, d, e, f, g;
    b = a.getHours();
    c = a.getMinutes();
    d = a.getSeconds();
    e = "0" + d;
    f = "0" + b;
    g = "0" + c;

    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");


    if (d < 10) {
        sec.innerHTML = e;

    }
    else {
        sec.innerHTML = d;
    }

    if (b < 10) {
        hrs.innerHTML = f;
    }
    else {
        hrs.innerHTML = b;
    }

    if (c < 10) {
        min.innerHTML = g;
    }
    else {
        min.innerHTML = c;
    }
    if (b < 10 & c < 10 & d < 10)

        return (f + ":" + g + ":" + e);

    else if (b < 10 & c >= 10 & d >= 10)

        return (f + ":" + c + ":" + d);

    else if (b >= 10 & c < 10 & d >= 10)

        return (b + ":" + g + ":" + d);

    else if (b >= 10 & c >= 10 & d < 10)

        return (b + ":" + c + ":" + e);

    else if (b < 10 & c < 10 & d >= 10)

        return (f + ":" + g + ":" + d);

    else if (b < 10 & c >= 10 & d < 10)

        return (f + ":" + c + ":" + e);

    else if (b >= 10 & c < 10 & d < 10)

        return (b + ":" + g + ":" + e);
    else if (b >= 10 & c >= 10 & d >= 10)
        return (b + ":" + c + ":" + d);
}
function Submit() {
    let op = document.getElementById("ool");
    return op.value;
}
function snooze() {
    z = Submit()[3]
    x = Submit()[4];
    y = (z + x);
    w = Number(y);
    q = String(w + 1);
    
    
    if (q >= 10 && q < 60)
    return q;
    else if (q < 10)
    return 0 + q;
    else if (q >= 60) {
        t = Number(Submit()[0])
        s = Number(Submit()[1]);
        if (s == 9) {
            s = 0;
            t++;
        }
        if (t == 2 && s == 3) {
            t = 0;
            s = 0;
        }
        if (s >= 0 && s < 9)
        s++;
        
        Submit()[0] = String(t);
        Submit()[1] = String(s);
        
        if (w == 55) {
            return "00"
        }
        if (w == 56) {
            return "01"
        }
        if (w == 57) {
            return "02"
        }
        if (w == 58) {
            return "03"
        }
        if (w == 59) {
            return "04"
        }
    }
}

function space() {

    if (time() == Submit())
        document.getElementById("myVoice").play();
    else if ((time()[3] + time()[4]) == snooze()) {
        if ((time()[6] + time()[7]) == Submit()[6] + Submit()[7]){
        if ((time()[0] + time()[1]) == Submit()[0] + Submit()[1])

            document.getElementById("myVoice").play();}
    }
}
function stop(){
    document.getElementById("myVoice").pause();
}
function popup(){
    pop=document.getElementById("popup");
    pop.style.display="block";
    pop.innerHTML="Alarm Set for " + Submit();
    
}
function msg(){
    ms=document.getElementById("message");
    ms.style.display="block";
    pop.style.display="none ";
    ms.innerHTML="Snoozed for 1 minute "
}
