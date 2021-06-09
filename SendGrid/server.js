const express=require('express');
const sgMail=require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.API_KEY);

const app=express();

app.get('/',(req,res)=>{
    res.send('HEllo World');
});

const message={
    to:'himanshu@gmail.com',
    from:'bobbyrdj007@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>Hey </strong>',
};

sgMail.send(message)
.then(() => {console.log("Mail Sent")}
,error=> {console.log('FAiled');

if(error.res){
    console.log(error.res.body);
}
});

app.listen(7000,()=> console.log('server is listening'));