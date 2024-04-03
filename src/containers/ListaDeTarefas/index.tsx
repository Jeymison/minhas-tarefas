import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Main } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Main>
      <p>
        2 tarefas marcadas como: &quot;Categoria&ldquo; e &quot;Termo&ldquo;
      </p>
      <ul>
        {itens.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Main>
  )
}

export default ListaDeTarefas
