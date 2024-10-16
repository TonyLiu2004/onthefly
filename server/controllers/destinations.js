import { pool } from '../config/database.js'

const createDestination = async (req, res) => {
    try {
        const { destination, description, city, country, img_url, flag_img_url } = req.body;
        const results = await pool.query(
            `INSERT INTO destinations (destination, description, city, country, img_url, flag_img_url)
            VALUES($1, $2, $3, $4, $5, $6) 
            RETURNING *`,
            [destination, description, city, country, img_url, flag_img_url]
        );
        res.status(201).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const getDestinations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM destinations ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const getDestination = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const results = await pool.query('SELECT * FROM destinations WHERE id = $1', [id]);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const updateDestination = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { destination, description, city, country, img_url, flag_img_url } = req.body;
        const results = await pool.query(`
            UPDATE destinations
            SET destination = $2, description = $3, city = $4, country = $5, img_url = $6, flag_img_url = $7
            WHERE id = $1
            RETURNING *`,
            [id, destination, description, city, country, img_url, flag_img_url]
        );
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const deleteDestination = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const results = await pool.query('DELETE FROM destinations WHERE id = $1 RETURNING *', [id]);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export default {
    createDestination,
    getDestinations,
    getDestination,
    updateDestination,
    deleteDestination
};