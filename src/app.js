exports.lambdaHandler = async (event, context) => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "https://dak1pni58hzx7.cloudfront.net/",
            "Access-Control-Allow-Methods": "OPTIONS,POST"
        },
        body: JSON.stringify('Email-Service-CORS'),
    };
    return response;
}