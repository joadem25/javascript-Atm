
function signUp () {
    if (lastName.value == "" || firstName.value == "") {
        message.innerText = "Please fill both fields";
        message.style.backgroundColor = "orange";
    }
    else {
    customerName.innerText = lastName.value + " " + firstName.value;
    nameWel.innerText = lastName.value + " " + firstName.value;;
    rowWelcomePage.style.display = "flex";
    rowSignUp.style.display = "none";
    }
}

function welProceed() {
    rowWelcomePage.style.display = "none";
    rowAccBal.style.display = "flex";
    rowTranStatus.style.display = "flex";
    rowAccInfoNTrans.style.display = "flex";
    rowAmt.style.display = "flex";
}

function deposit() {
    var bal = Number(balance.innerText);
    var amt = Number(amount.value);
    if (amount.value == ""){
        accActionStatus.innerText = "Please input an amount";
        accActionStatus.style.backgroundColor = "orange";
        accActionStatus.style.color = "white";
        accActionStatus.style.padding = "5px";
        setTimeout(defaultMes, 2000);
    }
    else {
        balance.innerText = bal + amt;
        amount.value = "";
        accActionStatus.innerText = "Transaction Successful";
        accActionStatus.style.backgroundColor = "green";
        accActionStatus.style.color = "white";
        setTimeout(defaultMes, 3000);
    }    
}

function withdraw() {
    var bal = Number(balance.innerText);
    var amt = Number(amount.value);
    

    if (amount.value == "") {
        accActionStatus.innerText = "Please input an amount";
        accActionStatus.style.backgroundColor = "orange";
        accActionStatus.style.color = "white";
        accActionStatus.style.padding = "5px";
        setTimeout(defaultMes, 2000);
    } else 
    
{
    if (bal-amt >= 0){
        balance.innerText = bal - amt;
        amount.value = "";
        accActionStatus.innerText = "Transaction Successful";
        accActionStatus.style.backgroundColor = "green";
        accActionStatus.style.color = "white";
        accActionStatus.style.padding = "5px";
        setTimeout(defaultMes, 3000);
        
    }

    else {
        amount.value = "";
        accActionStatus.innerText = "Insufficient funds";
        accActionStatus.style.backgroundColor = "red";
        accActionStatus.style.color = "white";
        accActionStatus.style.padding = "5px";
        setTimeout(defaultMes, 3000);
    }
    } 
    
}

function defaultMes() {
    accActionStatus.innerText = "Input amount and select a transaction";
    accActionStatus.style.backgroundColor = "transparent";
    accActionStatus.style.color = "rgb(143, 252, 143)";
    
}

function tranAirt(){
    var bal = Number(balance.innerText);
    var amt = Number(amount.value);
    

    if (bankName.value == "1" && trans.style.display == "flex") {
        accActionStatus.innerText = "Please select a bank"
        accActionStatus.style.backgroundColor = "orange";
        accActionStatus.style.color = "white";
        accActionStatus.style.padding = "5px";
    }
    else if (accNum.value == "" && trans.style.display == "flex") {
        accActionStatus.innerText = "Please input an account number"
        accActionStatus.style.backgroundColor = "orange";
        accActionStatus.style.color = "white";
        accActionStatus.style.padding = "5px";
    }
    else if (network.value =="1" && airt.style.display == "flex") {
        accActionStatus.innerText = "Please select a network provider"
        accActionStatus.style.backgroundColor = "orange";
        accActionStatus.style.color = "white";
        accActionStatus.style.padding = "5px";
    }
    
    else if (phonNum.value =="" && airt.style.display == "flex") {
        accActionStatus.innerText = "Please input a phone number"
        accActionStatus.style.backgroundColor = "orange";
        accActionStatus.style.color = "white";
        accActionStatus.style.padding = "5px";
    }
     
    
    else if (amount.value == ""){
        accActionStatus.innerText = "Please input an amount"
        accActionStatus.style.backgroundColor = "orange";
        accActionStatus.style.color = "white";
        accActionStatus.style.padding = "5px";
    }
    else 
    
{
    if (bal-amt >= 0){
        balance.innerText = bal - amt;
        amount.value = "";
        accActionStatus.innerText = "Transaction Successful";
        accActionStatus.style.backgroundColor = "green";
        accActionStatus.style.color = "white";
        accActionStatus.style.padding = "5px";
        transForm.reset();
        airtForm.reset();
        // network.reset();
        // phonNum.reset();
        // defBankSel.selected = true;
        // mtn.disabled = true;
        
    }

    else {
        amount.value = "";
        accActionStatus.innerText = "Insufficient funds";
        accActionStatus.style.backgroundColor = "red";
        accActionStatus.style.color = "white";
        accActionStatus.style.padding = "5px";
        accNum.value = "";
        phonNum.value = "";
    }
    } 
}

function edit() {
    

    if (lastNameEd.value == "" || firstNameEd.value == "") {
        messEdit.innerText = "Please fill both names"
    } 
    else {
    customerName.innerText = lastNameEd.value + " " + firstNameEd.value;
    dw.style.display = "flex";
    pa.style.display = "flex";
    as.style.display = "flex";
    rowAccSet.style.display = "none";
    
    messEdit.innerText = "";
    if (flexRadioDefault1.checked == true){
        accountType.innerText = "Savings"
        depo.disabled = false;
    }

    else if (flexRadioDefault2.checked == true){
        accountType.innerText = "Current"
        depo.disabled = false;
    }

    else {
        accountType.innerText = "Sapa"
        depo.disabled = true;
    } editForm.reset();
}

}



function accSet(){
    dw.style.display = "none";
    pa.style.display = "none";
    as.style.display = "none";
    rowAccSet.style.display = "flex"
}

function payments() {
    dw.style.display = "none";
    pa.style.display = "none";
    as.style.display = "none";
    trans.style.display = "flex"
    accActionStatus.innerText = "Select bank and provide account number"
}

function cont() {
    accActionStatus.innerText = "Input amount and select a transaction";
    accActionStatus.style.backgroundColor = "transparent";
    accActionStatus.style.color = "rgb(143, 252, 143)";
    dw.style.display = "flex";
    pa.style.display = "flex";
    as.style.display = "flex";
    trans.style.display = "none"
    airt.style.display = "none";
    rowAccSet.style.display = "none"
    messEdit.innerText = "";
    editForm.reset();
    transForm.reset();
    airtForm.reset();
    amount.value = "";
}

function airtime () {
    dw.style.display = "none";
    pa.style.display = "none";
    as.style.display = "none";
    airt.style.display = "flex";
    accActionStatus.innerText = "Select network and provide phone number"
}

