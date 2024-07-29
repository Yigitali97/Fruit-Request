"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { fruitList } from "@/lib/fruitList";
import SubmitButton from "./submit-button";
import { API } from "@/services/api";

const FruitForm: React.FC = () => {
  const router = useRouter();

  const [fruit, setFruit] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const filterNumbers = (str: string) => {
    return str.replace(/\D/g, "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await API.submitFruitForm({
        fruit,
        quantity: quantity,
      });

      router.push("/confirmation");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error submitting form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="fruit" className="block mb-2">
          Choose a Fruit
        </label>
        <select
          id="fruit"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select a fruit</option>
          {fruitList.map((fruit, index) => (
            <option key={fruit + index} value={fruit}>
              {fruit}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="quantity" className="block mb-2">
          How many fruit?
        </label>
        <input
          type="text"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(() => filterNumbers(e.target.value))}
          className="w-full p-2 border rounded"
          required
          min="1"
        />
      </div>
      <SubmitButton text="Submit" isLoading={isLoading} />
    </form>
  );
};

export default FruitForm;
