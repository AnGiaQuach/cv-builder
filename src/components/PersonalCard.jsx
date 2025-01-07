import React from "react";
import CardInput from "./CardInput";

export default function PersonalCard({ handlePersonalInput }) {
  return (
    <div className="card">
      <CardInput
        type="text"
        title="Fullname"
        handleChange={handlePersonalInput("name")}
      ></CardInput>
      <CardInput
        type="text"
        title="Email"
        handleChange={handlePersonalInput("email")}
      ></CardInput>
      <CardInput
        type="number"
        title="Phone Number"
        handleChange={handlePersonalInput("phoneNumber")}
      ></CardInput>
      <CardInput
        type="text"
        title="Address"
        handleChange={handlePersonalInput("address")}
      ></CardInput>
    </div>
  );
}
