module.exports = function(sequelize, DataTypes) {
	var burger = sequelize.define("Burger",{

		id:{
			type:DataTypes.INTEGER,
			primaryKey:true,
			autoIncrement:true,
		},
		burgername:{
			type:DataTypes.STRING,
			allowNull:false,
			validate: {
        len: [1]
      }
		},
		devoured:{
			type:DataTypes.BOOLEAN,
			allowNull:false,
			defaultValue:false,
		},
		createdAt: DataTypes.DATE,
      	updatedAt: DataTypes.DATE

	});

	return burger;
}