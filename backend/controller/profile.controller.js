import db from '../db.js';

class ProfileController {
    async createProfile(req, res) {
        const {id, name, description} = req.body;
        const setPrfoile = await db.query(`UPDATE "Users" set name = $1, description = $2 where id = '${id}' RETURNING *`, 
        [name, description]);
        res.json(setPrfoile.rows[0]);
    }
    async addLink(req, res) {
        const { id, links } = req.body; 
        try {
            console.log(links);
            const insertedLinks = [];
            for (let link of links) {
                const setLink = await db.query(`INSERT INTO "Links" (user_id, link) VALUES ($1, $2) RETURNING *`, [id, link]);
                insertedLinks.push(setLink.rows[0]);
            }
            res.json(insertedLinks);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ошибка при добавлении ссылок' });
        }
    }
    async updateLink(req, res) {
        const { links } = req.body;
        try {
            const UpdatedLinks = [];
            for (let link of links) {
                const PutLink = await db.query(`UPDATE "Links" SET link = $1 WHERE link_id = $2 RETURNING *`, [link.link, link.linkId]);
                UpdatedLinks.push(PutLink.rows[0]);
            }
            res.json(UpdatedLinks);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ошибка при обновлении ссылок' });
        }
    }
    async deleteLink(req, res) {
        const { linkIds } = req.body;
        try {
            const deletedLinks = [];
            for (let linkId of linkIds) {
                const deletedLink = await db.query(`DELETE FROM "Links" WHERE link_id = $1 RETURNING *`, [linkId]);
                deletedLinks.push(deletedLink.rows[0]);
            }
            res.json(deletedLinks);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ошибка при удалении ссылок' });
        }
    }    
    
    async getLink(req, res) {
        const { id } = req.body;
        try {
            const getLinksUser = await db.query(`SELECT link, link_id FROM "Links" where user_id = '${id}'`);
            const links = getLinksUser.rows.map(row => row.link);
            const linksId = getLinksUser.rows.map(row => row.link_id);
            res.json({links, linksId});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ошибка при получении ссылок' });
        }
    }
    async chekProfile(req, res) {
        const {id} = req.body;
        const Prfoile = await db.query(`SELECT name FROM "Users" where id = '${id}'`);
        
        // if (Prfoile.rows.length === 0) {

        // } else {
        // }
        res.json(Prfoile.rows[0]);
    }
    async getInfoUser(req, res) {
        const {id} = req.body;
        const getInfo = await db.query(`SELECT name, description, avatar, date FROM "Users" where id = '${id}'`);
        res.json(getInfo.rows[0]);
    }
} 

export default new ProfileController();
