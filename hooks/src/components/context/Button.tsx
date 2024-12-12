import { useContext } from "react"
import { ThemeContext } from "../../App"

const Button = ({text}:{text:string}) => {
    const theme = useContext(ThemeContext)

    const style = {
        color: theme === 'dark' ? 'white' : 'black',
        backgroundColor: theme !== 'dark' ? 'gray' : 'black'
    }
    return (
        <>
            <button style={style}>{text}</button>
        </>
    )
}

export default Button