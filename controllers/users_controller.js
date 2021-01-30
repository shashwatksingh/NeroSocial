const User = require('../models/users');
module.exports.profile = function(req,res){
    User.findById(req.params.id, (err,user)=> {
        return res.render('user_profile',{
            title: "Profile page",
            profile_user : user
        });
    });  
}

module.exports.update = function(req, res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
            return res.redirect('back');
        });
    } else{
        return res.status(401).send('Unauthorized!');

    }
}
module.exports.otherdetails = function(req,res){
    res.render('users',{
        title: "Other Details"
    });
}
//render the sign-up page
module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title : "NeroSocial |Sign Up"
    });
}
//render the sign-in page
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    res.render('user_sign_in',{
        title : "NeroSocial |Sign In"
    });
}

//get the sign-up data
module.exports.create = function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    } 
    User.findOne({
        email:req.body.email
    }, function(err,user){
        if(err){console.log('Error in finding user in signing up'); return;}
        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('Error in finding user while signing up'); return;}
                return res.redirect('/users/sign-in');
            });
        } else{
            return res.redirect('back');
        }
    });
}
//get the sign-in session data
module.exports.createSession = function(req,res){
    return res.redirect('/');
}
//
module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}