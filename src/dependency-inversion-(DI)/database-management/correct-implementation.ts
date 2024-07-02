
interface IDatabase {
    save(data : string) : boolean
}

// Low Level Module
class PostgresDB implements IDatabase {
    save(data : string) : boolean {
        console.log(`Saved ${data} in postgres DB`);
        return true
    }
}

class MongoDB implements IDatabase {
    save(data : string) : boolean {
        console.log(`Saved ${data} in Mongo DB`);
        return true
    }
}


// High Level Module
class DatabaseManagement {
    constructor(private readonly database : IDatabase){}

    execute(data : string) : boolean {
        return this.database.save(data)
    }

}

// Instantiate the HighLevelModule with a MySQL database.
let postgresDatabase: IDatabase = new PostgresDB();
let DatabaseManagement1: DatabaseManagement = new DatabaseManagement(postgresDatabase);

// Now use the module to execute some high level function.
DatabaseManagement1.execute("Some Data for Postgresql");

// Instantiate the HighLevelModule with a MongoDB database.
let mongoDBDatabase: IDatabase = new MongoDB();
let DatabaseManagement2: DatabaseManagement = new DatabaseManagement(mongoDBDatabase);

// Now use the module to execute some high level function.
DatabaseManagement2.execute("Some Data for MongoDB"); 



// In this example, HighLevelModule is now depending on the abstraction IDatabase. Whether the underlying database is MySQL or MongoDB, it doesn't care.
// It just knows that it can call the save method on the database object. This design allows us to change the database without having to modify the HighLevelModule.
// This is the Dependency Inversion Principle in action.