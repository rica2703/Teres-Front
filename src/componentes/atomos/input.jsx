function Input(props){
    return(
        <input type={props.type}className={props.className} placeholder={props.placeholder} onChange={props.onChange}onBlur={props.onBlur} readOnly={props.readOnly}/>
        
    );
}
export default Input;