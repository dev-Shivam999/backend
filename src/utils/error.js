class apiError extends Error {

    constructor(
        statusCode,
        massage = "some this wong",
        errors = [],
        stack = ""
    ) {
        super(massage).this.statusCode = statusCode
        this.data = null
        this.massage = massage
        this.success = false
        this.errors = errors
        if (stack) {
            this.stack = stack
        }
        else (
            Error.captureStackTrace(this, this.constructor)
        )

    }
}

export {apiError}