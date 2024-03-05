import React, { Fragment, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((currentStep) => currentStep + 1);
    }
  }

  function handleIsOpen() {
    setIsOpen((is) => !is);
  }

  return (
    <React.Fragment>
      <button className="close" onClick={handleIsOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              bg="#7950f2"
              textColor="#fff"
              text="Previous"
              onClick={handlePrevious}
              emoji="👈"
            />
            <Button
              bg="#7950f2"
              textColor="#fff"
              text="Next"
              onClick={handleNext}
              emoji="👉"
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function Button({ bg, textColor, text, onClick, emoji }) {
  return (
    <button style={{ backgroundColor: bg, color: textColor }} onClick={onClick}>
      <span>{emoji}</span>
      {text}
    </button>
  );
}

export default App;
