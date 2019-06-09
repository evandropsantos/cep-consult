const axios = require('axios');

async function getApi(cep) {
    const URL = `https://viacep.com.br/ws/${cep}/json`
    const response = await axios.get(URL)

    return response.data
}

module.exports = { getApi }
