import React from 'react';

const userInput = props =>{
  return (
    <>
      <form>
          <input 
          type='text'
          placeholder='name'
          onInput>    
          </input>
          <button className='submitButton' onClick={()=> FetchGoals()}>
            submit
          </button>
      </form>
    </>
  )  
}

export default userInput;