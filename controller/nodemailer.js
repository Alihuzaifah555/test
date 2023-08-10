const nodemailer = require("nodemailer");

exports.sendmail =async (req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'alihuzaifah555@gmail.com',
          pass: 'qsopzphyloazkscx'
        }
      });
    const emailtemplete=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
           <div style="max-width: 750px; width: 100%; margin: 0 auto;">
             <div style="text-align:center;margin-top: 50px;border-bottom: 1px solid grey;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8ivjh3jEgWs6uv7DMzADcxPcFaWP00H1hQ&usqp=CAU" alt="" width="250px" height="150px">
                <p style="font-size: 30px; color: rgb(58, 57, 57); margin: 0;">Thanks for your order</p>
                <p style="font-size: 20px; color: gray; margin-top:5px;">Order number:R6500600</p>
             </div>
             <div style="margin: 50px 0;">
                <p style="font-size: 22px; color: rgb(41, 40, 40); margin-bottom: 0;">Hi Smiles Davis,</p>
                <p style="font-size: 20px; color: rgb(122, 122, 122); margin-top:10px;">Thank you for your purchase.Please find your order summary below.</p>
             </div>
             <div style="background-color: rgb(252, 249, 249); padding: 20px 25px;margin-bottom: 50px;">
                <p style="font-size: 22px; color: rgb(41, 40, 40);">Order Summary</p>
                <table style="width: 100%;  color: rgb(122, 122, 122);">
                        <tr>
                            <td >Affinity Designer (macOS)</td>
                            <td style="padding: 0 40px;">2</td>
                            <td>$24.99</td>
                        </tr>
                        <tr>
                            <td style="border-bottom: 1px solid grey;padding: 10px 0px;">Fine Liner Affinity Burshes By The Artifex Forage</td>
                            <td style="padding: 0 40px;border-bottom: 1px solid grey">1</td>
                            <td style="border-bottom: 1px solid grey;">$0.00</td>
                        </tr>
                        <tr>
                            <td style="border-bottom: 1px solid grey;padding: 10px 0px;">VAT</td>
                            <td style="border-bottom: 1px solid grey;"></td>
                            <td style="border-bottom: 1px solid grey;">$0.00</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; color: rgb(41, 40, 40);; padding: 10px 0px;">Total</td>
                            <td></td>
                            <td style="font-weight: bold; color: rgb(41, 40, 40);;">$49.48</td>
                        </tr>
                </table>
             </div>
             <div class="padding:40px 0px">
                <p style=" color: rgb(122, 122, 122);">Your product will be emailed you shortly it will also be stored within your <span style="color: blue;">Affinity Account</span>. You will need to enter product key along your email address to validate software during installation.
                </p>
             </div>
             <div style="display: flex;justify-content: space-around; margin: 50px 0px;">
                <button style="padding: 20px 100px; background-color: rgb(3, 121, 255); border:none; color: white; border-radius: 5px;">VIEW ORDER</button>
                <button style="padding: 20px 100px; background-color:rgb(27, 136, 27); border:none; color: white; border-radius: 5px;">DOWNLOAD</button>
             </div>
             <div style="padding-bottom: 30px; border-bottom: 1px solid lightgray;">
                <h4 style="color: rgb(41, 40, 40);">Returns and refund:</h4>
                <p style="color: rgb(122, 122, 122);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium, fugit sequi illum harum repellendus aliquam dolor officia sunt iusto aperiam quasi aut cumque fuga modi, ipsam dolorum dolores. Nemo!</p>
             </div>
             <div style="display: flex; justify-content: center;padding: 30px 0px;">
                <button style="padding:20px 50px;border-radius: 5px; background-color: #4267b2; color: white; border: none;">Facebook</button>
                <button style="margin-left: 10px;border-radius: 5px;padding:20px 50px; background-color: rgb(46, 185, 240); color: white; border: none;">Twiter</button>
             </div>
             <div style="text-align: center; color: rgb(122, 122, 122);">
                <p style="margin: 0;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p style="margin: 0;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitiaaxime.</p>
                <p style="margin: 0;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, delectus?</p>
             </div>
        </div>
    
     </div>
    </body>
    </html>`;
    const mailOptions = {
        from: 'alihuzaifah555@gmail.com',
        to: 'alihuzaifah555@gmail.com',
        subject: 'Test Email',
        // text: 'Hello, this is a test email sent from Node.js using Nodemailer.',
        html: emailtemplete,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(400).json({
                message:"email not sent succesfully"
            })
        } else {
            console.log('Email sent:', info.response);
            return res.status(200).json({
                message:"email sent succesfully"
            })
        }
    });
}