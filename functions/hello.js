exports.handler = function(event, context, callback) {
    console.log(event)
    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify({msg: "Hello, Serverless World!!!"})
    })
}