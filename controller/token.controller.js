

class TokenController
{
    async takeToken(req, res){
        const data = {
            'token': (Math.random()*15200020)
        }
        res.status(200).json(data)
    }
}

module.exports = new TokenController()