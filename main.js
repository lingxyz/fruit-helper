const schedule = require('./lib/schedule')
const jd_fruit = require('./jd_fruit')

/**
 * 入口文件（主逻辑）
 */

// 每天8点 12点 18点跑一次东东农场脚本
const crons = ['0 0 8 * * *', '0 0 12 * * *', '0 0 18 * * *']
crons.forEach(cron => schedule(cron, jd_fruit))
