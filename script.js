function submit(){
    cname=c_name.value
    cprice=c_price.value
    ckey=c_key.value

    const det={
        cname,cprice,ckey
    }

    if(ckey in localStorage){
        alert("Car Key Already Present")
    }
    else if(ckey==''){
           alert("Name must be filled out");

    }
    else{
        localStorage.setItem(ckey,JSON.stringify(det))
        alert("Car Details Submitted")
        window.location='./index.html'
    }
}

function retrieve(){
    rkey=r_key.value
    if(rkey in localStorage){ 
        det=JSON.parse(localStorage.getItem(rkey))
        var data=''
        data=`<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Car Name: ${det.cname}</li>
          <li class="list-group-item">Price:${det.cprice}</li>
        </ul>
      </div>`
      document.getElementById("print").innerHTML=data

    }
    else if(rkey==''){ 
        alert("Key must be filled out");
    }
    else{
        data='<p class="text-danger">Car Not Found</p>'
        document.getElementById("print").innerHTML=data

    }
    
}

function remove(){
    remkey=rem_key.value 
    if(remkey in localStorage){
        det=JSON.parse(localStorage.getItem(remkey))
        localStorage.removeItem(remkey)
        var data=''
        data='<p class="text-success">Car Removed Successfully</p>'
    }
    
    else{
        data='<p class="text-danger">Invalid Key</p>'
    }
    document.getElementById("print2").innerHTML=data

}

function clr(){
    localStorage.clear()
    alert("All Data Cleared")
}

