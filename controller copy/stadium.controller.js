const db = require("../db");

class StadiumController{stadium
    async createStadium(req, res) {
        const {name, location, area, capacity} = req.body;
        const newStadium = await db.query(
            `INSERT INTO stadium (name, location, area, capacity) VALUES
            ($1, $2, $3, $4)`, [name, location, area, capacity]

        );
        const responce = await db.query(`SELECT * FROM stadium`);
        res.json(responce.rows)
    }
    async getAllStadium(req, res) {
        const allStadiums = await db.query(`SELECT * FROM stadium`);
        res.json(allStadiums.rows);
    }

    async getOneStadium(req, res){
        const id = req.params.id;
        const oneStadium = await db.query(
            `SELECT * FROM stadium WHERE stadium.id=$1`,
            [id]
        );
        res.json(oneStadium.rows[0]);
    }
    async getSortedStadium(req, res){
        const sortedStadiums = await db.query(
            `SELECT * FROM stadium ORDER BY area `
        );
        res.json(sortedStadiums.rows)
    }
    async updateStadium(req, res){
        const {id,name, location, area, capacity} = req.body;
        const updateStadium = await db.query(
            `UPDATE stadium SET name = $1, location = $2, area = $3, capacity = $4 WHERE id= $5 RETURNING *`,
            [name, location, area, capacity, id]
        );
        res.json(updateStadium.rows[0]);
    }
    async deleteStadium(req, res){
        const id = req.params.id;
        const deleteStadium = await db.query(
            `DELETE FROM stadium WHERE stadium.id = $1`,
            [id]
        );
        res.json(deleteStadium.rows[0]);
    }
}

module.exports = new StadiumController();    