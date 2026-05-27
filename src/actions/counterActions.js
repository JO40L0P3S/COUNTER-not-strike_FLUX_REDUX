/*  Actions são todos as modificações do estado global.   */

export const INCREMENTAR = 'INCREMENTAR';
export const DECREMENTAR = 'DECREMENTAR';

/* Para evitar erros de digitação são declaradas as constantes das ações,
visto que os reducers a utilizam para o switch-case.*/ 

export const incrementar = () => ( { type : INCREMENTAR } );
export const decrementar = () => ( { type : DECREMENTAR} );

/* As arrow functions são conveniências para evitar ter que escrever o objeto repetidas vezes,
as constantes retornam imediatamente o objeto da ação. */

/*  'type' faz referência ao tipo da ação, 
    também pode receber 'payload' referente
    ao conteúdo que será útil na ação    */