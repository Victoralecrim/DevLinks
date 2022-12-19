import './error.css'

import {Link} from 'react-router-dom'
import {Logo} from '../../components/Logo'

export default function Error(){
    return(
        <div className="error">
            <Logo/>
            <h1>Pagina não encontrada</h1>
            <p>Está página que está procurando não existe.</p>

            <Link className="link" to="/">
                Voltar para home
            </Link>
        </div>
    );
}