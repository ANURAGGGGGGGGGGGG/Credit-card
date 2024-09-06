import React, { useState } from 'react'
import validator from 'validator'

const Card = () => {
    const [errorMessage , setErrorMessage] = useState(" ")

    const validateCard = (e) => {
        if (validator.isCreditCard(e)) {
            setErrorMessage("Valid Credit Number")
        }else{
            setErrorMessage("Invalid Credit Number")
        }
    }
  return (
    <>
      <div style={{marginLeft : "200px"}}>
        <pre>
            <h2>Validating CreditCard in ReactJs</h2>
            <span>Enter CreditCard :</span> <input type="text" onChange={(e) => validateCard(e.target.value)}/> <br />
            <span style={{fontWeight : "bold", color : "red"}}>{errorMessage}</span>
        </pre>
      </div>
    </>
  )
}

export default Card
