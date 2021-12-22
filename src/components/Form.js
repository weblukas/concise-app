import React, { useRef, useState } from "react";
import FormInput from "./FormInput";


const initialValue = {
  cardHolder: "",
  cardNumber: "",
  expiredDate: "",
  ccv: ""
};
// próbowałem użyć card validator, ale nie działał, dlatego użyłem tego 
// chociaż to zupełnie nie profesjonalne

const nameValidation = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const ccvValidation = /^[0-9]{3, 4}$/;
const cardNumberValidation = /^4[0-9]{12}(?:[0-9]{3})?$/;


const Form = () => {
  const formRef = useRef(initialValue);

  const fieldUpdate = (fieldName, value) => {
    formRef.current[fieldName] = value;
  };

  // validators 
  const validators = {
    name: () => nameValidation.test(formRef.current.name),
    cardNumber: () => cardNumberValidation.test(formRef.current.cardNumber),
    ccv: () => ccvValidation.test(formRef.current.ccv)
  };

  // handle form submit

  const [cardHolder, setCardHolder] = useState('')
  const [cardNr, setCardNr] = useState('')
  const [expDate, setExpDate] = useState('')
  const [ccvNr, setCcvNr] = useState('')

const handleSubmit = (e)=>{
  e.preventDefault()
  setCardHolder(formRef.current.cardHolder)
  setCardNr(formRef.current.cardNumber)
  setExpDate(formRef.current.expiredDate)
  setCcvNr(formRef.current.ccv)
  
}


  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name="cardHolder"
        placeholder="card holder name"
        label="card holder name"
        OnChange={(value) => fieldUpdate("cardHolder", value)}
        valid={validators.name}
      />
      <FormInput
        name="cardNumber"
        placeholder="card number"
        label="card number"
        OnChange={(value) => fieldUpdate("cardNumber", value)}
        valid={validators.cardNumber}
      />
      <FormInput
        name="expiredDate"
        placeholder="expiredDate"
        label="expiredDate (mm/yy)"
        OnChange={(value) => fieldUpdate("expiredDate", value)}
        valid={validators.expiredDate}
      />
      <FormInput
        name="ccv"
        placeholder="CCV"
        label="CCV "
        OnChange={(value) => fieldUpdate("ccv", value)}
        valid={validators.ccv}
      />
      <button type="submit" >Add card</button>
    </form>
  );
};

export default Form;
