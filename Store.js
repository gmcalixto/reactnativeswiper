import { createStore } from 'redux'

//reducer para controle do contador
function counter(state = "teste", action) {
  switch (action.type) {
    case 'PAGE_0':
      return state = 'Do mesmo modo, o aumento do diálogo entre os diferentes setores produtivos assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos.'
    case 'PAGE_1':
      return state = 'Pensando mais a longo prazo, a adoção de políticas descentralizadoras faz parte de um processo de gerenciamento da gestão inovadora da qual fazemos parte.'
    case 'PAGE_2':
      return state = 'Pensando mais a longo prazo, a percepção das dificuldades promove a alavancagem das formas de ação.'
    default:
      return state
  }
}


//cria store visivel em toda a solução
let store = createStore(counter)


//exportação para permitir visibilidade
export{
  store
}
