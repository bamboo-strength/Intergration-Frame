import pg from 'pg';

class PostgreClient {
    public postgreClient: pg.Pool;

    constructor() {
        const postgreClient = this.connect();
        postgreClient.connect();

        this.postgreClient = postgreClient;
    }

    private connect() {
        const config = {
            user: 'postgres',
            host: 'localhost',
            database: 'integration',
            password: 'qazwsxedc123!@#',
            port: 5432,
            max: 20
        }

        return new pg.Pool(config);
    }
}

export default new PostgreClient().postgreClient;