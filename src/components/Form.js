import React, { useRef } from "react";
import FormInput from "./FormInput";
import valid from "card-validator";

console.log(valid);

const initialValue = {
  name: "",
};

const nameValidation = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/

const Form = () => {
  const formRef = useRef(initialValue);

  
 
  const fieldUpdate = (fieldName, value) => {
    formRef.current[fieldName] = value;
    
  };

  const validators = {
    name: () => nameValidation.test(formRef.current),
    cardNumberValidation: () => valid.number(formRef.current),
    expiredDate: () => formRef.current.expiredDate.length > 4,
  };

  
  // if()
  return (
    <form>
      <FormInput
        name="card-holder"
        placeholder="card holder name"
        label="card holder name" 
        OnChange={(value) => fieldUpdate("name", value)}
        validCard={validators.name}
      />
      <FormInput
        name="cardNumber"
        placeholder="card number"
        label="card number"
        OnChange={(value) => fieldUpdate("card-number", value)}
        validCard={validators.cardNumberValidation}
      />
      <FormInput
        name="expiredDate"
        placeholder="expiredDate"
        label="expiredDate"
        OnChange={(value) => fieldUpdate("expiredDate", value)}
        validCard={validators.expiredDate}
      />
    </form>
  );
};

export default Form;
