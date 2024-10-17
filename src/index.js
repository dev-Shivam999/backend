import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({ path: './env' })

connectDB()
    .then(
        () => {
            app.on('error', (error) => { console.error(error) })

            
            app.listen(process.env.PORT || 3000, () => {
                console.log('sever is running on port ' + process.env.PORT);
            })
        }
    )
    .catch((error) => {
        console.log("bd connection fail")
        throw error
    })