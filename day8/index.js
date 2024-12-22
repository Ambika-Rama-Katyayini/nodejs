var nm = require('nodemailer');
var transporter = nm.createTransport(
    {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth:{
            user: "demo47942@gmail.com",
            pass: "pass-key",
        }
    }
);
var options = {
    from: "demo47942@gmail.com",
    to: "kkatyaini1@gmail.com",
    subject: "test mail from nodemailer module",
    text: "Nodeemail sending 'nodemailer' test message"
}
transporter.sendMail(
    options, function(error_info, success_info){
        if(error){
            console.log(error_info);
        }
        else{
            console.log("Send Successfully");
        }
    }
)
























































































