import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import styles from '../styles';
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import { useAuth } from "../../../context/AuthContext";

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleRegister = () => {
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.authContainer}>
        {currentStep === 1 && (
          <Step1 onNext={() => setCurrentStep(currentStep + 1)} />
        )}
        {currentStep === 2 && (
          <Step2 onNext={() => setCurrentStep(currentStep + 1)} />
        )}
        {currentStep === 3 && (
          <Step3 onNext={() => setCurrentStep(currentStep + 1)} />
        )}
        {currentStep === 4 && (
          <Step4 onNext={handleRegister} />
        )}
      </div>
    </div>
  );
}

export default RegisterPage;