import { useContext } from "react"
import Button from "./Button"
import { ThemeContext, UserContext } from "../../App"

const G3 = () => {
    const user = useContext(UserContext)
    const theme = useContext(ThemeContext)
    
    

    return (
        <>
            {user.name}
            <Button text="G3 child" func={() => theme === 'dark' ? 'light' : 'dark'} 
                /></>
    )
}

export default G3