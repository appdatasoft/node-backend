const AWS = require("aws-sdk");

AWS.config.accessKeyId = process.env.AWS_ACCESS_D;
AWS.config.secretAccessKey = process.env.AWS_SECRET_D;
AWS.config.region = process.env.AWS_REGION_D;

const html = (message) => {
    return `<div>${message}</div>`;
};

exports.mailer = (data) => {
    const params = {
        Destination: {
            ToAddresses: [data.email],
        },
        Message: {
            Subject: {
                Charset: "UTF-8",
                Data: data.subject,
            },
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: html(data.message),
                },
            },
        },
        Source: process.env.SENDER_EMAIL,
    };
    return (sendPromise = new AWS.SES().sendEmail(params).promise());
};