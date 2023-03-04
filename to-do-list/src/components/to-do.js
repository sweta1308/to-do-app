import '../App.css'

export const ToDo = () => {
    return (
        <>
            <input placeholder="Enter Task" type="text"/>
            <li>
                Buy milk 
                <i class="fa-solid fa-square-check"></i>
                <i class="fa-solid fa-trash"></i>
            </li>
        </>
    )
}