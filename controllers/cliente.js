

var clienteController={

    test: (req,res)=>{
        return res.status(200).send({
            test:'testeando clientecontroller'
        });
    }

}

module.exports= clienteController;