const nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport( {
    service:"hotmail",
    auth:{
        user:"nodeproject123@outlook.com",
        pass://"your password"
    }
});

const options={
    from:"nodeproject123@outlook.com",
    to:"ishaksk@gmail.com",
    subject:"sending email with nodejs",
    text:"its very simple"
};

transporter.sendMail(options,(err,info)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(info);
})
