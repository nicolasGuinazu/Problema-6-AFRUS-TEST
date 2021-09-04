import classes from './SinglePokemon.module.css'

const SinglePokemon=(props)=>{
    return(
        <div className={classes.card}>
           <ul className={classes.list}>
               <li><h1>{props.name}</h1></li>
               <li>Type: {props.type}</li>
               <li>Height: {props.height}</li>
               <li>Weight: {props.weight}</li>
               <li><img src={props.image}/></li>
           </ul>
        </div>
    )
   
}

export default SinglePokemon