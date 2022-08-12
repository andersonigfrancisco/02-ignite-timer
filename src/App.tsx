import {ThemeProvider} from 'styled-components';
import { defaultThemes } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

import {Button} from './Components/Button'



export function App() {
  

  return (
    <ThemeProvider theme={defaultThemes}>
      <Button variant='primary'/>
      <Button variant='secondary'/>
      <Button variant='sucess'/>
      <Button variant='danger'/>
      <Button />

      <GlobalStyle />

    </ThemeProvider>
  )
}