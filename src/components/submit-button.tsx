import Image from "next/image";
import React from "react";
import styles from "./submit-button.module.css";

interface SubmitButtonProps {
  text: string;
  isLoading?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, isLoading }) => {
  return (
    <button type="submit" className={styles.button} disabled={isLoading}>
      {isLoading ? (
        <>
          <Image
            src="/spinner.svg"
            alt="spinner"
            className="animate-spin"
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
