

var libroController={

    test: (req,res)=>{
        return res.status(200).send({
            test:'testeando librocontroller'
        });
    }

}

module.exports= libroController;