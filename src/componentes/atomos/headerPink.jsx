import Boton from "./boton";
import textos from '../../js/main.js';
import Logo from '../../assets/img/logo.png'
function HeaderPink(){
    return(
        <>
        <div className="headerRosa">
            <label  className="" >{textos.textoHeader.titulo}</label>
        </div>
        <div className="centradoLogo">
        <img src={Logo} alt="not-found" className="logoHeaderPink" />
        </div>
        </>
    );
}
export default HeaderPink;