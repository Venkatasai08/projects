const nodemailer = require('nodemailer');


exports.contactUs = (req, res) => {

    console.log(req.body);
    // const { naame, email, subject, message } = req.body;
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            user: 'venkatasaivishwanath123@gmail.com',
            pass: 'v1118912'
        }
    });

    var mailOptions = {
        from: `${req.body.email}`,
        to: 'venkatasaivishwanath123@gmail.com',
        subject: `${req.body.subject}`,
        text: `Name : ${req.body.naame} \n Email : ${req.body.email} \n Subject : ${req.body.subject} \n Message : ${req.body.message}`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            
            res.sendFile(__dirname + "/form.html"   );
        }
    });

}
