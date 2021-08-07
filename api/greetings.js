export default (_req, res) => {
    console.log("request received")
    res.status(200).json({
        message: "Hello From Serverless Functions!!!"
    })
}