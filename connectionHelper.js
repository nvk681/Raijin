const config = require("./config.json");
require("dotenv").config();

var connectionHelper = {
    /* 
    Validates the connection details and returns the params that are required to establish connection.
    Structure: 
    {
        "connectionName": Connections details that are inside the config file, based on the env file it selects the connection details,
        "connectionDetails": For the connections that are not mentioned in the config files
    }
    */
    validateMysqlConnection: function(mysqlConnectionDetails) {
        if (!mysqlConnectionDetails) {
            throw new Error('Empty mysqlConnectionDetails are passed to validateMysqlConnection function');
        }
        if (mysqlConnectionDetails["connectionName"]) {
            let mysqlConnectionName = mysqlConnectionDetails["connectionName"];
            let mysqlConnectionDetailsFromConfig = null;
            if (!config.mysql) {
                throw new Error("No mysql connection details found in config file");
            }
            if (config.mysql.connections) {
                if (config.mysql.connections[mysqlConnectionName]) {
                    mysqlConnectionDetailsFromConfig = config.mysql.connections[mysqlConnectionName];
                } else {
                    mysqlConnectionDetailsFromConfig = config.mysql.connections.default;
                }
            }
        }
    },
    //TODO
    getDefaultMysqlConnection: function() {
        return "apple"
    },
    connectToSql: function(connectionDetails = null) {
        if (connectionDetails) {
            try {
                this.validateMysqlConnection(connectionDetails);
            } catch (error) {
                console.log(error);
            }

        } else {
            this.getDefaultMysqlConnection();
        }
    }

}

module.exports = connectionHelper;