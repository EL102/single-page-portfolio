function appendMailto(){
    let message = document.getElementById("mailmessage").value;
    let subject = document.getElementById("mailSubject").value;
    console.log(subject);
    console.log(message);

    let mailToAttr = ducument.getElementById("sendMail");
    mailToAttr.setAttribute("href, mailto:huangco6498@gmail.com?subject="+ subject+ "&body=" + message);
}
    let date= new Date();
    let yearPos = document.getElementById("getYear");
    let currYear = data.getFullYear();
    yearPos.innerHTML = currYear;
