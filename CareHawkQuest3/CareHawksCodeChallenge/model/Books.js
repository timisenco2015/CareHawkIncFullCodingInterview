const Sequelize = require('sequelize');
const sequelize = require('../databaseConfig/database');
const Model = Sequelize.Model;

class Books extends Model 
{}

Books.init(
{
	
	
	
	book_id: 
	{
		primaryKey: true,
		
		type: Sequelize.STRING,
			
		allowNull: false
		
	},

	book_title: 
	{
		
		type: Sequelize.STRING,
		
		allowNull:false
	},


	book_author: 
	{
		type: Sequelize.STRING,
		allowNull: false
	},
	
}, 
{
				
	sequelize,
				
	modelName: 'bookstable'
				
});

Books.sync({  });
module.exports  =Books;

