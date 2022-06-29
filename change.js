const HOST = '127.0.0.1'
const PORT = '27017'
const DB_NAME = 'onlineJudgeDB'


var db = connect(`${HOST}:${PORT}/${DB_NAME}`),
    onlineJudge = null;
db.contests.update({"_id": 142995735221753}, {$set: {conteststartdate: (new Date((new Date()).valueOf() + 2*60*1000*60+2*1000*60)).toISOString().split(":").slice(0,2).join(':')}})
