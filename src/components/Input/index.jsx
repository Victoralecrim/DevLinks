import './input.css'

export function Input(props){
    return(
        <input type="text"
        className="form-input"
        {...props}
        />
    )
}