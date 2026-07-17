import { Pool } from 'pg';
import bcrypt from 'bcrypt';

class AuthenticationRepositories {
    constructor() {
        this.pool = new Pool();
    }

    async addRefreshToken(token) {
        const query = {
            text: 'INSERT INTO authentications VALUES($1)',
            values: [token],
        };

        await this.pool.query(query);
    }

    async deleteRefreshToken(token) {
        const query = {
            text: 'DELETE FROM authentications WHERE token = $1',
            values: [token],
        };
        await this.pool.query(query);
    }

    async verifyRefreshToken(token) {
        const query = {
            text: 'SELECT token FROM authentications WHERE token = $1',
            values: [token],
        };

        const result = await this.pool.query(query);
        if (!result.rows.length) {
            return false;
        }

        return result.rows[0];
    }

    async verifyUserCredential(username, password) {
        const query = {
            text: 'SELECT id, password FROM users WHERE username = $1',
            values: [username],
        };

        const user = await this.pool.query(query);
        if (!user.rows.length) {
            return null;
        }

        const { id, password: hashedPassword } = user.rows[0];
        const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

        if (!isPasswordMatch) {
            return null;
        }
        return id;
    }
}

export default new AuthenticationRepositories();