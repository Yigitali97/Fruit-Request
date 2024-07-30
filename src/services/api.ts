export const API = {
  submitFruitForm: async (data: {
    selectedFruit: string;
    quantity: string;
  }) => {
    const response = await fetch("/api/submit-fruit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error("Error submitting form");
  },
};
