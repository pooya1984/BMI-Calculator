import React, { useState, useRef } from "react";
import "./Calculator.css";
import Calculator from "./Calculator";
// import Alert from "./Alert";
import {
  IonItem,
  IonInput,
  IonLabel,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
} from "@ionic/react";

interface ContainerProps {}

const BMI: React.FC<ContainerProps> = () => {
  const [result, setResult] = useState<Number>();

  const WeightInput = useRef<HTMLIonInputElement>(null);
  const heightInput = useRef<HTMLIonInputElement>(null);

  const onchangeHandler = () => {
    const enterWeight = +WeightInput.current!.value!;
    const enterheight = +heightInput.current!.value!;
    if (enterWeight <= 0 || enterheight <= 0) {
      // setShowAlert("Please enter valid Number!");
      return;
    }
    const result = enterWeight / (enterWeight * enterheight);

    setResult(result);
  };

  const onchangeReset = () => {
    WeightInput.current!.value = "";
    heightInput.current!.value = "";
    setResult(0);
  };

  return (
    <div className="container">
      {/* <Alert showAlert={showAlert}/> */}
      <IonIcon name="refresh-outline"></IonIcon>
      <IonItem className="ion-input ion-text-uppercase">
        <IonLabel position="floating">your height</IonLabel>
        <IonInput
          name="height"
          type="number"
          ref={heightInput}
          placeholder="Enter Input"
        ></IonInput>
      </IonItem>
      <IonItem className="ion-input ion-text-uppercase">
        <IonLabel position="floating">your weight</IonLabel>
        <IonInput
          name="weight"
          type="number"
          ref={WeightInput}
          placeholder="Enter Input"
        ></IonInput>
      </IonItem>

      <Calculator
        onchangeHandler={onchangeHandler}
        onchangeReset={onchangeReset}
      />

      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>your result</IonCardSubtitle>
        </IonCardHeader>
        {result && <IonCardContent>{result.toFixed(2)}</IonCardContent>}
      </IonCard>
    </div>
  );
};

export default BMI;
