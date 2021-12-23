import React from "react";
import CardSlider from "./components/CardSlider";
import Modal from "./components/Modal";
import { useGlobalContext } from "./context";

const PaymentPage = () => {
  const { openModal } = useGlobalContext();
  return (
    <div>
      <h1>Payment page</h1>
      <CardSlider />
      <button onClick={openModal} style={{ margin: "4rem", padding: "1rem" }}>
        Add new credit card
      </button>

      <Modal />
    </div>
  );
};

export default PaymentPage;
