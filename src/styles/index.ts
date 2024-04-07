import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
const EstiloGlobal = createGlobalStyle`
* {
  margin: 0 ;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Main = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 40px;
`
export const Campo = styled.input`
  border-radius: 8px;
  border-color: #666666;
  background-color: #fff;
  padding: 8px;
  font-weight: bold;
  color: #666666;
  width: 100%;
`

export const Botoes = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botoes)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
