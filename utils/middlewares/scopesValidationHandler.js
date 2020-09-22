const boom=require('@hapi/boom');

function scopesValidationHandler(allowedScopes){
    return function (req, res, next){
        if(!req.user || (req.user && !req.user.scopes)){
            next(boom.unauthorized('missing scopes'));
        }
        const hasAccess=allowedScopes.map(allowedScope=> req.user.scopes.includes(allowedScope))
        .find(allowed=>Boolean(allowed));
        if(hasAccess){
            next();
        }else{
            next(boom.unauthorized('insufficient scopes'));
        }

    }
}

module.exports=scopesValidationHandler;