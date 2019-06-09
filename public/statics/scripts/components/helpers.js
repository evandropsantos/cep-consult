export const typeNumber = e => {
    var tecla = (window.event) ? event.keyCode:e.which;  

    if( (tecla > 47 && tecla < 58) ) return true;
    else {
        if (tecla == 8 || tecla == 0) return true;
        else return false;
    }
}

export const mask = (element) => (`${element.substring(0,5)}-${element.substring(5,8)}`);

export const template = (model) => {
    return `
        <ul class="list-cep">
            <li><strong>CEP:</strong> ${model.cep}</li>
            <li><strong>Estado:</strong> ${model.uf}</li>
            <li><strong>Cidade:</strong> ${model.localidade}</li>
            <li><strong>Logradouro:</strong> ${model.logradouro}</li>
        </ul>
    `;
}

export const validation = (data) => {
    if(data.length > 7) return true;
    else return false;
}

export const msgError = (mesage) => {
    let msgError = document.createElement('p');
    
    msgError.textContent = mesage;
    msgError.className = 'msg-error';

    return msgError;
}