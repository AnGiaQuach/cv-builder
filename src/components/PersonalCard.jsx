import React from "react";
import CardInput from "./CardInput";

export default function PersonalCard() {
  return (
    <div className="card">
      <CardInput type="text" title="Fullname"></CardInput>
      <CardInput type="text" title="Email"></CardInput>
      <CardInput type="number" title="Phone Number"></CardInput>
      <CardInput type="text" title="Address"></CardInput>
    </div>
  );
}
