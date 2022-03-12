import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterOutlet,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { UsersList } from "./features/items/UsersList";
import {
  AddUserButton,
  ModalContainer,
  ModalContainerClose,
  UsersContainer,
} from "./styles/App";
import { addNewPost, itemUpdated } from "./features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Header from "./components/header/Header";

setupIonicReact();

const Modal = ({ location, match }: any) => {
  console.log("match", match);
  console.log("location", location);

  const { userId } = match.params;

  const post = useSelector((state: any) =>
    state.users.items.find((user: any) => user.id === userId)
  );

  const [name, setName] = useState(post.name);
  const [team, setTeam] = useState(post.team);
  const dispatch = useDispatch();
  const history = useHistory();

  const onNameChanged = (e: any) => setName(e.target.value);
  const onTeamChanged = (e: any) => setTeam(e.target.value);

  const onSavePostClicked = () => {
    if (name) {
      dispatch(
        itemUpdated({
          id: userId,
          name,
          team,
        })
      );
      history.push(`/`);
    }
  };

  const onDismissPostClicked = () => {
    history.push(`/`);
  };

  return (
    <ModalContainer>
      <ModalContainerClose>
        <Link
          to={{
            pathname: `/`,
            state: { modal: false },
          }}
        >
          close
        </Link>
      </ModalContainerClose>
      <IonList>
        <IonItem>
          <IonInput
            value={name}
            placeholder="Name"
            onIonChange={onNameChanged}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Conexão</IonLabel>
          <IonSelect
            value={team}
            placeholder="Selecione"
            onIonChange={onTeamChanged}
          >
            <IonSelectOption value="Manchester City">
              Manchester City
            </IonSelectOption>
            <IonSelectOption value="Real Madrid">Real Madrid</IonSelectOption>
            <IonSelectOption value="Chealsea">Chealsea</IonSelectOption>
            <IonSelectOption value="Arsenal">Arsenal</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <IonButton
          expand="full"
          shape="round"
          color="success"
          type="button"
          onClick={onSavePostClicked}
        >
          Salvar
        </IonButton>
        <IonButton
          expand="full"
          shape="round"
          fill="outline"
          color="dark"
          type="button"
          onClick={onDismissPostClicked}
        >
          Fechar
        </IonButton>
      </div>
    </ModalContainer>
  );
};

const AddUser = () => {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const canSave = [name, team].every(Boolean) && addRequestStatus === "idle";

  const onNameChanged = (e: any) => setName(e.target.value);
  const onTeamChanged = (e: any) => setTeam(e.target.value);

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(addNewPost({ name, team })).unwrap();
        setName("");
        setTeam("");
      } catch (err) {
        console.error("Failed to save the post: ", err);
      } finally {
        setAddRequestStatus("idle");
        onDismissPostClicked();
      }
    }
  };

  const onDismissPostClicked = () => {
    history.push(`/`);
  };

  return (
    <ModalContainer>
      <ModalContainerClose>
        <Link
          to={{
            pathname: `/`,
            state: { modal: false },
          }}
        >
          close
        </Link>
      </ModalContainerClose>
      <IonList>
        <IonItem>
          <IonInput
            value={name}
            placeholder="Name"
            onIonChange={onNameChanged}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Conexão</IonLabel>
          <IonSelect
            value={team}
            placeholder="Selecione"
            onIonChange={onTeamChanged}
          >
            <IonSelectOption value="Manchester City">
              Manchester City
            </IonSelectOption>
            <IonSelectOption value="Real Madrid">Real Madrid</IonSelectOption>
            <IonSelectOption value="Chealsea">Chealsea</IonSelectOption>
            <IonSelectOption value="Arsenal">Arsenal</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <IonButton
          expand="full"
          shape="round"
          color="success"
          type="button"
          onClick={onSavePostClicked}
        >
          Salvar
        </IonButton>
        <IonButton
          expand="full"
          shape="round"
          fill="outline"
          color="dark"
          type="button"
          onClick={onDismissPostClicked}
        >
          Fechar
        </IonButton>
      </div>
    </ModalContainer>
  );
};

const App: React.FC = () => (
  <IonApp>
    <Header />
    <IonReactRouter>
      <UsersContainer>
        <UsersList />
        <AddUserButton>
          <Link
            to={{
              pathname: "/addUser",
            }}
          >
            +
          </Link>
        </AddUserButton>
      </UsersContainer>
      <IonRouterOutlet>
        <Switch>
          <Route path="/addUser" component={AddUser} />
          <Route path="/editUser/:userId" component={Modal} />
          <Redirect to="/" />
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
