import { HeaderContainer } from "./styles";
import {Timer,Scroll} from 'phosphor-react';

export function Header() {
  return (
    <HeaderContainer>
      <img src="" alt="" />
      <nav>
        <a href="#">
          <Timer size={24} />
        </a>

        <a href="#">
          <Scroll size={24} />
        </a>

      </nav>
    </HeaderContainer>
  )
}