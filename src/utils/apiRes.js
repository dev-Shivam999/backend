class apiRes{
    constructor(statusCode,data,massage="susses"){
        this.statusCode = statusCode
        this.data = data
        this.massage = massage
        this.success=statusCode<400
    }
}