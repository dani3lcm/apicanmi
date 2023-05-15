module.exports = (sequelize, DataTypes, Model) => {

    class Clinics extends Model {}

    Clinics.init({
        // Model attributes are defined here
        Name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        IdCity: {
          type: DataTypes.INTEGER
          // allowNull defaults to true
        },
        IdMunicipality: {
          type: DataTypes.INTEGER
          // allowNull defaults to true
        },
        Status: {
            type: DataTypes.BOOLEAN
            // allowNull defaults to true
        },
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'tClinic' // We need to choose the model name
      });
      
      return Clinics;
}