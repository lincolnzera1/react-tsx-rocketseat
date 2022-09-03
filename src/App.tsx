import { Button } from "./components/Button";

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";


export function App() {

  return (
    
    <ThemeProvider theme={defaultTheme}>
      
      <h1>Estoicismo</h1>
      <Button cor="primary" />
      <Button cor="secondary"/>
      <Button cor="danger"/>

      dwqkopdwq

    <GlobalStyle />
    </ThemeProvider>

   
  )
}