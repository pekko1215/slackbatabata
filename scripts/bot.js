var counter = {};

module.exports = function(robot) {
        robot.respond(/ping/, function(res) {
                res.reply("おちろよおおおおおおおおお")
        });
        robot.hear(/田端でバタバタ/, function(res) {
                if (res.message.user.name == res.robot.name) {
                        return }
                var username = res.message.user.name
                if (username in counter) {} else {
                        counter[username] = 0;
                }
                counter[username]++;
                res.send(username + "さんが田端でバタバタしました。");
                res.send("通算"+counter[username]+"回目です。")
        })
}
