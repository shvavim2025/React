import { useContext } from "react"
import { ThemeContext } from "../../App"

const Button = ({text ,func}:{text:string ,func: React.MouseEventHandler<HTMLButtonElement>}) => {
    const theme = useContext(ThemeContext)

    const style = {
        color: theme === 'dark' ? 'white' : 'black',
        backgroundColor: theme !== 'dark' ? 'gray' : 'black'
    }
    return (
        <>
            <button style={style} onClick={func}>{text}</button>
        </>
    )
}

export default Button