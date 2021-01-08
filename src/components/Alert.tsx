import { IonApp } from "@ionic/react";
import { isSourceFile } from "typescript";
import React, { useState } from "react";
import { IonAlert, IonButton, IonContent } from "@ionic/react";

const Alert: React.FC<{ onchangeHandler: () => void }> = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass="my-custom-class"
        header={"Alert"}
        subHeader={"Subtitle"}
        message={"This is an alert message."}
        buttons={["OK"]}
      />
    </IonContent>
  );
};

export default Alert;
