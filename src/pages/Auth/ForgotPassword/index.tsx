import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../components/Navbar";

import styles from '../styles';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const ForgotPasswordPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [email, setEmail] = useState<string>('');

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.authContainer}>
        {currentStep === 1 && (
          <Step1 
            onNext={() => setCurrentStep(currentStep + 1)}
            email={email}
            setEmail={setEmail}
          />
        )}
        {currentStep === 2 && (
          <Step2 
            onNext={() => setCurrentStep(currentStep + 1)}
            email={email}
          />
        )}
        {currentStep === 3 && (
          <Step3 
            onNext={() => setCurrentStep(currentStep + 1)}
            email={email}
          />
        )}
        {currentStep === 4 && (
          <Step4 onNext={handleRegister} />
        )}
      </div>
    </div>
  );
}

export default ForgotPasswordPage;