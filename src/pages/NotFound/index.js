import './notFound.css'
import { Link } from 'react-router-dom'

export default function NotFound () {
    let linkImagem = '' 

    return (
        <div className='not-found'>
            <h1>Erro 404</h1>
            <h2>A página que você procura não existe ou está inacessível</h2>
            <Link to='/'>Veja todos os filmes</Link>
        </div>
    )
}