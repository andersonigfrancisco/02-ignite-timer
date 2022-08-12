import {ThemeProvider} from 'styled-components';
import {Button} from './Components/Button'
import { defaultThemes } from './styles/themes/default';

export function App() {
  

  return (
    <ThemeProvider theme={defaultThemes}>
      <Button variant='primary'/>
      <Button variant='secondary'/>
      <Button variant='sucess'/>
      <Button variant='danger'/>
      <Button />
    </ThemeProvider>
  )
}