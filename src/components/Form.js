import React, { useRef } from "react";
import FormInput from "./FormInput";
import cardValidator from "card-validator";



const initialValue = {
  name: "",
};

const nameValidation = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

const Form = () => {
  const formRef = useRef(initialValue);

  const fieldUpdate = (fieldName, value) => {
    formRef.current[fieldName] = value;
  };


  const validators = {
    name: (name) => nameValidation.test(formRef.current[name]), 
    cardNumberValidation: (name) => {
      console.log(name);
      console.log(formRef.current);

      console.log(formRef.current[name]);

      return cardValidator.number(formRef.current[name]).isPotentiallyValid;
    },
    expiredDate: (name) => {
      console.log(name);
      console.log(formRef.current);

      console.log(formRef.current[name]);
      console.log(
        cardValidator.expirationDate(formRef.current[name]).isPotentiallyValid
      );

      return cardValidator.expirationDate(formRef.current[name])
        .isPotentiallyValid;
    },
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
        name="card-number"
        placeholder="card number"
        label="card number"
        OnChange={(value) => fieldUpdate("card-number", value)}
        validCard={(value) => validators.cardNumberValidation(value)}
      />
      <FormInput
        name="expiredDate"
        placeholder="expiredDate"
        label="expiredDate (mm/yy)"
        OnChange={(value) => fieldUpdate("expiredDate", value)}
        validCard={validators.expiredDate}
      />
    </form>
  );
};

export default Form;
