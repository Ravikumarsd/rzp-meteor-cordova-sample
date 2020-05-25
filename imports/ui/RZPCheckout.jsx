import React, { Component } from "react";

export default class RZPCheckout extends Component {
  getRzpOptions = () => {
    let rzpOptions = {
      key: "rzp_test_reDxxPtINEQiLQ",
      amount: "2000", // 2000 paise = INR 20
      name: "Merchant Name",
      description: "Purchase Description",
      image: "https://i.imgur.com/n5tjHFD.png",
      handler: (response) => {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Harshil Mathur",
        email: "harshil@razorpay.com",
      },
      notes: {
        address: "Hello World",
      },
      theme: {
        color: "#F37254",
      },
    };
    return rzpOptions;
  };
  onPayClick = () => {
    const rzpOptions = this.getRzpOptions();
    RazorpayCheckout.open(
      rzpOptions,
      this.successCallback,
      this.cancelCallback
    );
  };

  successCallback = (payment_id) => {
    alert("payment_id: " + payment_id);
  };

  cancelCallback = (error) => {
    alert(error.description + " (Error " + error.code + ")");
  };
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button
          onClick={this.onPayClick}
          style={{
            width: "200px",
            height: "50px",
            background: "#00BCD4",
            border: "none",
          }}
        >
          PAY NOW
        </button>
      </div>
    );
  }
}
