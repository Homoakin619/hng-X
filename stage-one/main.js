const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.use("/api",(request,response) => {
    const {slack_name, track} = request.query;
    if (slack_name && track) {
        const day = new Date();
        const time = day.toISOString().split('.')[0] + 'Z';;
        const day_object = {
            1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday",
            5: "Friday", 6: "Saturday", 0: "Sunday"
        }
        const current_day = day_object[day.getDay()]
        return response.status(200).json({
            "slack_name": slack_name,
            "current_day": current_day,
            "utc_time": time,
            "track": track,
            "github_file_url": "https://github.com/Homoakin619/hng-X/blob/master/stage-one/main.js",
            "github_repo_url": "https://github.com/Homoakin619/hng-X/tree/master/stage-one",
            "status_code": 200
        }
        )
    } else {
        return response.status(400).json({
            "message": "query parameters of 'slack_name' and 'track' are required",
            "status_code": 400
        })
    }
})

app.use("/",(request, response) => {
    return response.send("Welcome to Api homepage")
})

const start = () => {
    try {
        app.listen(port,console.log(`Server is running at ${port}`))
    } catch (error) {
        console.log(error);
    }
}


start();