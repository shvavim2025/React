import { createContext, useState } from 'react'
import './App.css'
import G1 from './components/context/G1'
import Button from './components/context/Button';
// import Memo from './components/Memo'

export const ThemeContext = createContext('light'); // נשתמש בערך ברירת המחדל רק במקרה שהמימוש יהיה מחוץ לעץ שתחת הprovider
export const UserContext = createContext({ name: 'fff' }); // נשתמש בערך ברירת המחדל רק במקרה שהמימוש יהיה מחוץ לעץ שתחת הprovider

function App() {

  const [theme, setTheme] = useState('dark')

  return (
    <>
      {/* <Memo /> */}
      
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={{ name: 'gggg' }}>
        <Button text="change theme" func={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
          <G1 />
        </UserContext.Provider>
      </ThemeContext.Provider>

      <Button text="App child" func={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /> {/* default value */}

    </>
  )
}

export default App
