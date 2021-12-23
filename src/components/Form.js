import React, { useRef, useState } from "react";
import FormInput from "./FormInput";

const initialValue = {
  cardHolder: "",
  cardNumber: "",
  expiredDate: "",
  cvv: "",
};
// próbowałem użyć card validator, ale nie zadziałał, dlatego użyłem regex
// do numeru karty niewystarczające ale do reszty powinny być ok
// jednak coś nie działa

const nameValidation = /^([A-Za-z]{3, })\s([A-Za-z]{3, })$/;
const cvvValidation = /^[0-9]{3, 4}$/;
const cardNumberValidation = /^4[0-9]{12}(?:[0-9]{3})?$/;
const expiredDateValidation = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

const Form = () => {
  const formRef = useRef(initialValue);

  const fieldUpdate = (fieldName, value) => {
    formRef.current[fieldName] = value;
  };

  // validators
  const validators = {
    name: () => nameValidation.test(formRef.current.name),
    cardNumber: () => cardNumberValidation.test(formRef.current.cardNumber),
    expiredDate: () => expiredDateValidation.test(formRef.current.expiredDate),
    cvv: () => cvvValidation.test(formRef.current.cvv),
  };

  // handle form submit

  const [cardHolder, setCardHolder] = useState("");
  const [cardNr, setCardNr] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvvNr, setCvvNr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardHolder(formRef.current.cardHolder);
    setCardNr(formRef.current.cardNumber);
    setExpDate(formRef.current.expiredDate);
    setCvvNr(formRef.current.cvv);

    const newCard = {
      cardHolder: cardHolder,
      cardNr: cardNr,
      expDate: expDate,
      ccvNr: cvvNr,
    };

    console.log(newCard);
  };

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
        placeholder="expiration date"
        label="expiration date (mm/yy)"
        OnChange={(value) => fieldUpdate("expiredDate", value)}
        valid={validators.expiredDate}
      />
      <FormInput
        name="cvv"
        placeholder="cvv"
        label="cvv"
        OnChange={(value) => fieldUpdate("cvv", value)}
        valid={validators.cvv}
      />
      <button type="submit">Add card</button>
    </form>
  );
};

export default Form;
