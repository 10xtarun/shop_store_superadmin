import { chain } from '../helpers/middleware-chainer'
import morgan from 'morgan'
import responseTime from 'response-time'

const greetingsHandler = (_req, res) => {
    res.status(200).json({
        message: "Hello From Serverless Functions!!!"
    })
}

export default chain
    (
        responseTime((req, res, time) => {
            // send response in 2 point floating value
            res.setHeader("x-response-time", time.toFixed(2))
        }),
        morgan('combined')
    )
    (greetingsHandler)
