var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	unique_id: Number,
	email: String,
	username: String,
	firstName: String,
	secondName: String,
	dob: Date,
	contactNumber: String,
	salary: String,
	jobrole: String,
	yearlybonus: String,
	password: String,
	passwordConf: String
}),
User = mongoose.model('User', userSchema);

module.exports = User;