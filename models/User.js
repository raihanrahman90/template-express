const { DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("user",{
        username:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return User;
};