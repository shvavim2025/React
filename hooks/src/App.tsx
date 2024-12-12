import { createContext, useState } from 'react'
import './App.css'
import G1 from './components/context/G1'
import Button from './components/context/Button';
import Memo from './components/Memo'
import Store from './components/reducer/Store';

export const ThemeContext = createContext('light'); // נשתמש בערך ברירת המחדל רק במקרה שהמימוש יהיה מחוץ לעץ שתחת הprovider
export const UserContext = createContext({ name: 'fff' }); // נשתמש בערך ברירת המחדל רק במקרה שהמימוש יהיה מחוץ לעץ שתחת הprovider

function App() {

  const [theme, setTheme] = useState('dark')

  return (
    <>
      {/* <Memo /> */}
      {/* <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        change theme
      </button>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={{ name: 'gggg' }}>
          <G1 />
        </UserContext.Provider>
      </ThemeContext.Provider> */}

      {/* <Button text="App child" /> {/* default value */}

      <Store />

    </>
  )
}

export default App
