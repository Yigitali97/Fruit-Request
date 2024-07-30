"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { fruitList } from "@/lib/fruitList";
import SubmitButton from "../components/submit-button";
import { API } from "@/services/api";
import { filterNumbers } from "@/utils";
import Select from "@/components/select";
import styles from "./fruit-form.module.css";

type FormData = {
  selectedFruit: string;
  quantity: string;
};

const FruitForm: React.FC = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      selectedFruit: "",
      quantity: "",
    },
  });

  const { mutate, isError, isPending } = useMutation({
    mutationFn: (data: FormData) => API.submitFruitForm(data),
    onSuccess: (response, variables) => {
      alert(
        `${response.message}: ${variables.selectedFruit}, ${variables.quantity}`
      );
      router.push("/confirmation");
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fruit Request</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="selectedFruit" className={styles.label}>
            Choose a Fruit
          </label>
          <Controller
            name="selectedFruit"
            control={control}
            rules={{ required: "Please select a fruit" }}
            render={({ field }) => (
              <Select
                options={fruitList}
                selectedFruit={field.value}
                setSelectedFruit={field.onChange}
                placeholder="Select a fruit"
              />
            )}
          />
          {errors.selectedFruit && (
            <p className={styles.error}>{errors.selectedFruit.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="quantity" className={styles.label}>
            How many fruit?
          </label>
          <Controller
            name="quantity"
            control={control}
            rules={{
              required: "Quantity is required",
              min: { value: 1, message: "Quantity must be at least 1" },
            }}
            render={({ field }) => (
              <input
                type="text"
                id="quantity"
                {...field}
                placeholder="How many fruit?"
                onChange={(e) => field.onChange(filterNumbers(e.target.value))}
                className={styles.input}
              />
            )}
          />

          {errors.quantity && (
            <p className={styles.error}>{errors.quantity.message}</p>
          )}
        </div>
        <SubmitButton text="Submit" isLoading={isPending} />
        {isError && (
          <p className={styles.error}>An error occurred. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default FruitForm;
