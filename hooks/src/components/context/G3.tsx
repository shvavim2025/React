import { useContext } from "react"
import Button from "./Button"
import { UserContext } from "../../App"

const G3 = () => {
    const user = useContext(UserContext)
    return (
        <>
            {user.name}
            <Button text="G3 child" /></>
    )
}

export default G3