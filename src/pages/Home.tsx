import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { UsersList } from "../features/items/UsersList";
import { UsersContainer, AddUserButton } from "../styles/App";

export const Modals = ({ location }: any) => {
  const { state = {} } = location;
  const { modal } = state;
  return (
    <div className={modal ? "modal-container" : undefined}>
      <div>Modal content goes here</div>
    </div>
  );
};

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Copinha</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <UsersContainer>
          <UsersList />
          <AddUserButton>
            <Link
              to={{
                pathname: "/addUser",
                state: { modal: true },
              }}
            >
              +
            </Link>
          </AddUserButton>
        </UsersContainer>
      </IonContent>
    </IonPage>
  );
};

export default Home;
