/**
 * @param {function} acc 
 * @param {function} mid 
 * @returns 
 */
function reduceMiddleware(acc, mid) {
    return function (req, res, next) {
        acc(req, res, (err) => {
            if (err) {
                if (mid.length === 4) return mid(err, res, next)
                return next(err)
            }
            if (mid.length === 4) {
                return next()
            }
            try {
                mid(req, res, next, undefined)
            } catch (e) {
                next(e)
            }
        })
    }
}

/**
 * @description Function to reduce the middlewares and chain them
 * @param {function[]} middlewares 
 * @returns reduced middlewares
 */
function combineMiddleware(middlewares) {
    return middlewares.reduce(
        reduceMiddleware,
        (_req, _res, next) => next()
    )
}


/**
 * Function to chain multiple middlewares in express for serverless functions
 * @param {function[]} middlewares 
 * @returns 
 */
export function chain(...middlewares) {
    return function (fn) {
        return function (req, res) {
            return combineMiddleware(middlewares)(req, res, () => {
                fn(req, res);
            })
        }
    }
}