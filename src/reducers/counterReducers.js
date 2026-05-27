import { INCREMENTAR, DECREMENTAR } from "../actions/counterActions";

/* Aqui eu importo as minhas actions, para utilizá - las na função Reducer,
que modifica o estado global */

/* É importante trabalhar com objeto para que a aplicação seja escalável.
É só adicionar propriedades aos objetos! :) */

const INITIAL_STATE = {
    contador: 0
};

/*      É definida a constante função que modifica o estado global, declarando o parâmetro padrão
        (funcionalidade nativa JS ES6) como nosso objeto de estado. Também deve ser passada à função
        a ação correspondente à modificação.  */

const contadorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENTAR:
            return { ...state, contador: state.contador + 1 };

            /* Spread Operators porque o estado original nunca é alterado diretamente. 
            O react-redux só entende que precisa atualizar o estado, quando recebe um novo.
            A função copia o objeto atual, e modifica a sua propriedade. */

        case DECREMENTAR:
            return { ...state, contador: state.contador - 1 }; 
        default:
            return state;
    }
};

export default contadorReducer;