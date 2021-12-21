import React, { useRef } from "react";
import FormInput from "./FormInput";

const initialValue = {
  name: "",
};

const nameValidation = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
const cardNumberValidation = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/
const Form = () => {
  const formRef = useRef(initialValue);

 
  const fieldUpdate = (fieldName, value) => {
    formRef.current[fieldName] = value;
  };

  const validators = {
    name: () => nameValidation.test(formRef.current),
    cardNumberValidation: () => cardNumberValidation.test(formRef.current),
    expiredDate: () => formRef.current.expiredDate.length > 4,
  };
  return (
    <form>
      <FormInput
        name="card-holder"
        placeholder="card holder name"
        label="card holder name" 
        OnChange={(value) => fieldUpdate("name", value)}
        valid={validators.name}
      />
      <FormInput
        name="cardNumber"
        placeholder="card number"
        label="card number"
        OnChange={(value) => fieldUpdate("card-number", value)}
        valid={validators.cardNumberValidation}
      />
      <FormInput
        name="expiredDate"
        placeholder="expiredDate"
        label="expiredDate"
        OnChange={(value) => fieldUpdate("expiredDate", value)}
        valid={validators.expiredDate}
      />
    </form>
  );
};

export default Form;
