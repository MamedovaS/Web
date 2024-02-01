const Sequelize = require("sequelize");
const db = require("./db.js");

const Stadium = db.define("planes", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(30), // VARCHAR(30)
    allowNull: false,
  },
  tickets: {
    type: Sequelize.INTEGER.UNSIGNED, // INT UNSIGNED
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING(30), // VARCHAR(30)
    allowNull: false,
  },
  capacity  : {
    type: Sequelize.INTEGER.UNSIGNED, // INT UNSIGNED
    allowNull: false,
  },
});

Stadium.sync().then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = Stadium;