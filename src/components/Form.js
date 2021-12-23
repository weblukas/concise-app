import React, { useRef, useState } from "react";
import FormInput from "./FormInput";

const initialValue = {
  cardHolder: "",
  cardNumber: "",
  expiredDate: "",
  ccv: "",
};
// próbowałem użyć card validator, ale nie zadziałał, dlatego użyłem regex
// do numeru karty niewystarczające ale do reszty powinny być ok
// jednak coś nie działa

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
    ccv: () => ccvValidation.test(formRef.current.ccv),
  };

  // handle form submit

  const [cardHolder, setCardHolder] = useState("");
  const [cardNr, setCardNr] = useState("");
  const [expDate, setExpDate] = useState("");
  const [ccvNr, setCcvNr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardHolder(formRef.current.cardHolder);
    setCardNr(formRef.current.cardNumber);
    setExpDate(formRef.current.expiredDate);
    setCcvNr(formRef.current.ccv);

    // const newCard = {
    //   cardHolder: cardHolder,
    //   cardNr: cardNr,
    //   expDate: expDate,
    //   ccvNr: ccvNr
    // }

    // console.log(newCard);
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
        name="ccv"
        placeholder="CCV"
        label="ccv"
        OnChange={(value) => fieldUpdate("ccv", value)}
        valid={validators.ccv}
      />
      <button type="submit">Add card</button>
    </form>
  );
};

export default Form;
