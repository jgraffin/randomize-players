import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { UsersList } from "../features/items/UsersList";
import "../components/ModalContainer.css";

export const Modals = ({ location }: any) => {
  const { state = {} } = location;
  const { modal } = state;
  return (
    <div className={modal ? "modal-container" : undefined}>
      <div>Modal content goes here</div>
    </div>
  );
};

const Homea = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Copinha</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <UsersList />
      </IonContent>
    </IonPage>
  );
};

export default Homea;
