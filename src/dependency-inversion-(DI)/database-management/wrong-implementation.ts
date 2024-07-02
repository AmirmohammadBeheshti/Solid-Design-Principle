
// Low Level Module
class PostgresDB {
    save(data : string) : boolean {
        console.log(`Saved ${data} in postgres DB`);

        return true
    }
}


// High Level Module
class DatabaseManagement {
    constructor(private readonly database : PostgresDB){}

    execute(data : string) : boolean { 
        return this.database.save(data)
    }

}

// In this example, HighLevelModule is a high-level module, and it's directly dependent on the low-level module MySQLDatabase.
// This means if you decided to change your database from MySQL to MongoDB, you would have to modify HighLevelModule, which is not good.