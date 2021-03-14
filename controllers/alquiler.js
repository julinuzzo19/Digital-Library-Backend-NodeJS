

var alquilerController={

    test: (req,res)=>{
        return res.status(200).send({
            test:'testeando alquilercontroller'
        });
    }

}

module.exports= alquilerController;