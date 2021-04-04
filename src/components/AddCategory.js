import React, { useState } from 'react';
import PropTypes from 'prop-types'


//Esto es un componente hijo de GifExpertApp jejejej
//Desestructiramos el props.setCategories abajo
export const AddCategory = ( {setCategories }) => {


    const [inputValue, setInputValue] = useState('Busca cualquier gif'); //Vacio seria un undefined y daria WARNING!
   
    
    const handleDeleteState = () =>{
        if( inputValue === 'Busca cualquier gif'){
            setInputValue('')
        }
    }


    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }


    const handleSubmit = (e) =>{
        e.preventDefault();

        if ( inputValue.trim().length > 0) {
            console.log( 'Done!');
            
            setCategories( cats => [inputValue/* , ...cats */]);
            setInputValue('');
        } 
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                type='text'
                value={ inputValue }
                onClick= { handleDeleteState }
                onChange={ handleInputChange }
            />
        </form>
    )
}


//ESTO ES UN CANDADO PARA OBLIGAR A MANDAR LA FUNCION DESDE GiftExpertAPP
AddCategory.propTypes ={

    setCategories: PropTypes.func.isRequired
}
