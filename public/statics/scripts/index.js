import {typeNumber, mask, template, validation, msgError} from './components/helpers';

import '../scss/style.scss';

class Main {
    constructor(form) {
        this._inputValue = '';
        this._box = document.querySelector('.container');

        this.keyup( form.cepText );
        this.submit( form );
    }

    keyup(element) {
        element.addEventListener('keyup', (event) => {
            if( typeNumber(event) ) this._inputValue = element.value;
            else element.value = '';

            console.log('Valor do INPUT -> ', this._inputValue);
        });
    }

    submit(element) {
        const box = this._box;

        element.addEventListener('submit', (event) => {
            event.preventDefault();

            const input = this._inputValue;
            const URL = `http://localhost:3000/cep?cepText=${input}`;
            
            console.log('URL -> ', URL);
            
            box.classList.add('loading');
    
            if(validation(input)) {
                element.cepText.value = mask(input);
    
                fetch(URL)
                .then(res => res.json())
                .then(cep => {
                    box.classList.remove('loading');
                    box.innerHTML = template(cep) 
                })
                .catch(error => {
                    console.log('Ocorreu algum erro no processo: ', error);

                    box.classList.remove('loading');
                    box.appendChild( msgError('Erro ao processar a requisição, tente novamente!') );
                });
            } else {
                box.classList.remove('loading');
                box.innerHTML = '';
                box.appendChild( msgError('Digite um CEP válido!') );
            }
        });
    }

} new Main( document.querySelector('.form-cep') );
