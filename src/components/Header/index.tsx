import { Container } from "./styles";
import logo from '../../assets/logo.svg'

export function Header(){
  return(
    <Container>
      <img src={logo} alt="TODO logo"/>
      <h1>to<span>do</span></h1>
    </Container>
  )
}
