import React, { useState } from 'react'
import TextInputPrimary from './common/TextInputPrimary'
import AddMultipleValues from './common/AddMultipleValues'

const CreateCourse = () => {

    
  const [hilights, setHilights] = useState([]);

  function onSetHilights(value){
    setHilights([...hilights, value]);
  }

    return (
        <div>
            <div>
                <form className='border-2 border-red-400 p-3 grid gap-3'>
                    <TextInputPrimary placeholder={'Title'}/>
                    <TextInputPrimary placeholder={'Description'}/>
                    <TextInputPrimary placeholder={'Price'}/>
                    <TextInputPrimary placeholder={'Old Price'}/>
                    <TextInputPrimary placeholder={'Offer'}/>
                    <TextInputPrimary placeholder={'Image'}/>
                    <TextInputPrimary placeholder={'Teacher'}/>
                    <TextInputPrimary placeholder={'Language'}/>

                    <AddMultipleValues setHilights={setHilights} hilights={hilights} />
                </form>
            </div>
        </div>
    )
}

export default CreateCourse