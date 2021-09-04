import classes from './SearchBar.module.css'
import { useState} from 'react';
import SinglePokemon from './SinglePokemon';

const SearchBar=()=>{
    const [input,setInput]=useState('')
    const [newPoke,setNewPoke]=useState([])

    const onChangeHandler=(event)=>{
        setInput(event.target.value);     
    }
    const onSubmitHandler=(event)=>{
        if(input.trim()==''){
            event.preventDefault()
            alert('try searching with a pokemon name or id!')
        }else{
        event.preventDefault()
        let newPokemon={}
        fetch('https://pokeapi.co/api/v2/pokemon/'+input)
        .then(res=>{
            return res.json()
            
        })
        .then((data)=>{
            console.log(data)
            newPokemon=[{
                name:data.name.toUpperCase(),
                id:data.id,
                type:data.types[0].type.name,
                height:data.height,
                weight:data.weight,
                image:data.sprites.front_default 
            }]
            setNewPoke(newPokemon)
            
        }).catch((err)=>{
            alert('mmm something went wrong... try again!')
        })
        }
       
    }
    let searchedPokemon=[]
    if(newPoke.length>0){
        console.log(newPoke)
        searchedPokemon= newPoke.map(el=><SinglePokemon key={el.id} name={el.name} type={el.type} height={el.height} weight={el.weight} image={el.image}/>)   
    } 
   
    return(
        <>
      
        <div className={classes.card}>
        <form className={classes.formSearch} onSubmit={onSubmitHandler}>
            <input value={input} className={classes.input} onChange={onChangeHandler} placeholder={'Search pokemons...'}></input>
            <button className={classes.add} type="submit"><i class="fas fa-search-plus"></i></button>
        </form>
        </div>
        <div className={classes.container}>
        {input.trim()!=''? searchedPokemon : []}
        </div>
        </>
    )
   
}

export default SearchBar


