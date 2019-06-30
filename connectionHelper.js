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
        if (mysqlConnectionDetails["connectionName"]) {
            let mysql;
        } else {

        }

    },
    connectToSql: function(connectionDetails = null) {
        if (connectionDetails) {
            validateMysqlConnection();
        } else {
            getDefaultMysqlConnection();
        }
    }

}

module.exports = connectionHelper;