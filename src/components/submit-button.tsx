import Image from "next/image";
import React from "react";

interface SubmitButtonProps {
  text: string;
  isLoading?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, isLoading }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right flex items-center"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Image
            src="/spinner.svg"
            alt="spinner"
            className="w-5 h-5 mr-2 animate-spin"
            width={20}
            height={20}
          />
          Processing...
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitButton;
