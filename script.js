function ob(){
    if(!document.getElementById("Sn").value=="") var S=parseFloat(document.getElementById("Sn").value);
    if(!document.getElementById("a1").value=="") var a1=parseFloat(document.getElementById("a1").value);
    if(!document.getElementById("an").value=="") var an=parseFloat(document.getElementById("an").value);
    if(!document.getElementById("n").value=="") var n=parseInt(document.getElementById("n").value);
    if(!document.getElementById("r").value=="") var r=parseFloat(document.getElementById("r").value);

    if(document.getElementById("r").value==""){
        if(document.getElementById("Sn").value=="" && !document.getElementById("a1").value=="" && !document.getElementById("an").value=="" && !document.getElementById("n").value==""){
            var SN=((a1+an)/2)*n;
            document.getElementById("Sn").placeholder=SN;
        }
        if(!document.getElementById("Sn").value=="" && document.getElementById("a1").value=="" && !document.getElementById("an").value=="" && !document.getElementById("n").value==""){
            var a11=((S*2)/n)-an;
            document.getElementById("a1").placeholder=a11;
        }
        if(!document.getElementById("Sn").value=="" && !document.getElementById("a1").value=="" && document.getElementById("an").value=="" && !document.getElementById("n").value==""){
            var ann=((S*2)/n)-a1;
            document.getElementById("an").placeholder=ann;
        }
        if(!document.getElementById("Sn").value=="" && !document.getElementById("a1").value=="" && !document.getElementById("an").value=="" && document.getElementById("n").value==""){
            var nn=(S*2)/(a1+an);
            document.getElementById("n").placeholder=nn;
        }
        if(!document.getElementById("Sn").value=="" && !document.getElementById("a1").value=="" && !document.getElementById("n").value==""){
            var rr=((2*S)/n)/((2*a1)+(n-1));
            document.getElementById("r").placeholder=rr;
        }
    }
    if(!document.getElementById("r").value==""){
        if(document.getElementById("Sn").value=="" && !document.getElementById("a1").value=="" && !document.getElementById("n").value==""){
            var snn=(((2*a1)+((n-1)*r))/2)*n;
            document.getElementById("Sn").placeholder=snn;
        }
        if(!document.getElementById("Sn").value=="" && document.getElementById("a1").value=="" && !document.getElementById("n").value==""){
            var a111=(((2*S)/n)-((n-1)*r))/2;
            document.getElementById("a1").placeholder=a111;
        }
    }
}