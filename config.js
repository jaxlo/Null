module.exports = {
    host: ["0.0.0.0", "agoot.fly.dev"],
    port: 3000,
    logpath: "logger.php",
    foodMass: 1,
    fireFood: 20,
    limitSplit: 16,
    defaultPlayerMass: 10,
	virus: {
        fill: "#33ff33",
        stroke: "#19D119",
        strokeWidth: 20,
        defaultMass: {
            from: 100,
            to: 150
        },
        splitMass: 180,
        uniformDisposition: false,
	},
    gameWidth: 2000,// DONT CHANGE
    gameHeight: 4000,
    adminPass: "DEFAULT",
    gameMass: 200000000,
    maxFood: 1050,
    maxVirus: 50,
    slowBase: 4.5,
    logChat: 0,
    networkUpdateFactor: 40,
    maxHeartbeatInterval: 10000,
    foodUniformDisposition: true,
    newPlayerInitialPosition: "farthest",
    massLossRate: 1,
    minMassLoss: 50,
    sqlinfo: {
      fileName: "db.sqlite3",
    }
};
