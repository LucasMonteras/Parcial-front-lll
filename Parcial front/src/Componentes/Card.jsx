
import cardStyles from './Card.module.css'
import memeJava from '../assets/memeJava.jpg'



const Card = ({estudiante}) => {



    return (
        <div className={cardStyles.card} style={{display:'flex',flexDirection:'column',justifyContent:'center' }}>
            <h3>Nombre : {estudiante.nombre}</h3>
            <h3>Apellido: {estudiante.apellido}</h3>
            <img className='card-img' src={memeJava}/>
            <h4>Materia: {estudiante.materia}</h4>
        </div>
    )
}

export default Card


