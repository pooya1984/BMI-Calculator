import {
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonIcon,
} from "@ionic/react";
import { moon } from "ionicons/icons";
import React from "react";
import BMI from "../components/BMI";
import "./Home.css";

const Home: React.FC = () => {
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonGrid>
            <IonRow>
              <IonTitle>BMI Calculator</IonTitle>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList className="ion-margin-top">
          <IonItem>
            <IonIcon slot="start" icon={moon} />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
            />
          </IonItem>
        </IonList>
        <BMI />
      </IonContent>
    </IonPage>
  );
};

export default Home;
