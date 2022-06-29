const HOST = '127.0.0.1'
const PORT = '27017'
const DB_NAME = 'onlineJudgeDB'


var db = connect(`${HOST}:${PORT}/${DB_NAME}`),
    onlineJudge = null;
    
db.contests.drop()
db.problems.drop()
db.submissions.drop()
db.users.drop()
db.dropDatabase()