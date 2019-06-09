const service = require('../services/getApi');

module.exports = app => {
    app.get('/cep', (req, res) => {
    
        ( async function() {
            try {
                const cep = req.query.cepText;
                const result = await service.getApi(cep);
                
                const newCep = {
                    cep: result.cep,
                    logradouro: result.logradouro,
                    localidade: result.localidade,
                    uf: result.uf
                }

                console.log('Requisicao feita com sucesso: ', newCep);
                res.json(newCep);

            } catch(error) {
                console.log('Ocorreu algum erro ao processar a requisicao: ', error);
                res.status(406).end();
            }
        }) ();
    }); 
}
