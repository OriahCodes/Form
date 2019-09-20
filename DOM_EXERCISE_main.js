const clearAlerts = function(){
    const alertBox = document.getElementById("alerts")

    while(alertBox.hasChildNodes()) {
        alertBox.removeChild(alertBox.firstChild);
    }
}

const addHeight = function(){

    let alertBox = document.getElementById("alerts")
    document.getElementById("container").style.paddingBottom = 25 * (alertBox.childElementCount + 1) +"px"
}

const err = function(errText){

    const alert = document.createElement("div")
    alert.setAttribute("id","alert")
    alert.innerHTML = errText
    document.getElementById("alerts").appendChild(alert)

}

const validate = function(){
    clearAlerts()

    const name = document.getElementById("name").value
    const salary = document.getElementById("salary").value
    const birthday = document.getElementById("birthday").value
    const phone = document.getElementById("phone").value

    if (!name){
        err("* Name is missing")
    }
        else if (name.length < 3){
            err("* Name must be longer then 2 characters")
        }

    if (!salary){
        err("* Salary is missing")
    }
        else if (salary < 10000 || salary > 16000 ){
            err("* Salary must be greater than 10,000 but less than 16,000")
        }

    if (birthday == ""){
        err("* Birthday is missing")
    }

    if (!phone){
        err("* Phone is missing")
    }
        else if (phone.length < 10){
            err("* Phone must be 10 digits long")
        }
    
    addHeight()
}


