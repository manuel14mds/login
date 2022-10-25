import passport from 'passport'
import local from 'passport-local'

const LocalStrategy = local.Strategy
const initializePassport = () =>{
    passport.use('register', new LocalStrategy({passReqToCallback:true, usernameField:'email'}, async(req,email,password,done)=>{
        
    }))
}