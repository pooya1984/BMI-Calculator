import React from "react";
import "./Calculator.css";
import { IonButton, IonGrid, IonCol, IonIcon } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BMI: React.FC<{
  onchangeHandler: () => void;
  onchangeReset: () => void;
}> = (props) => {
  return (
    <IonGrid>
      <IonCol>
        <IonButton className="ion-margin-top" onClick={props.onchangeHandler}>
          <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
          Calculate
        </IonButton>
      </IonCol>
      <IonCol>
        <IonButton className="ion-margin-top" onClick={props.onchangeReset}>
          <IonIcon slot="start" icon={refreshOutline}></IonIcon>
          Reset
        </IonButton>
      </IonCol>
    </IonGrid>
  );
};

export default BMI;
