import '../App.css'

export const ToDo = () => {
    return (
        <>
            <form className='form'>
                <input className='input' placeholder="Enter Task" type="text"/>
                <li>
                    Buy milk 
                    <i className="fa-solid fa-square-check"></i>
                    <i className="fa-solid fa-trash"></i>
                </li>
            </form>
        </>
    )
}