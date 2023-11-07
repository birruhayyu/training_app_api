const UserService = require('../services/users.serv');

exports.register = async(req,res,next)=>{
    try {
        const {email, password} = req.body;

        const succesRes = await UserService.registerUser(email, password);

        res.json({status: true, success: 'User registered successfully'});
    } catch (error) {
        throw error;
    }
}