const asyncHandle=(requestHand)=>{
    (req,res,next)=>{
        Promise.resolve(requestHand(req,res,next)).catch((error)=>next(error));
    }

}

export {asyncHandle}