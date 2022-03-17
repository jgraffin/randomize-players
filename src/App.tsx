import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Shield1 from "./images/1.png";

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
  ModalContainer,
  ModalContainerClose,
  UsersContainer,
} from "./styles/App";
import { addPost, itemUpdated } from "./features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "./app/store";
import Header from "./components/header/Header";
import { teams } from "./features/teams/TeamsSlice";

setupIonicReact();

const AddUser = () => {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [slug, setSlug] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const canSave = [name, team].every(Boolean) && addRequestStatus === "idle";

  const onSlugify = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const onNameChanged = (e: any) => setName(e.target.value);
  const onTeamChanged = (e: any) => {
    setTeam(e.target.value);
    const slugName = onSlugify(e.target.value);
    setSlug(slugName);
  };

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(addPost({ name, team, slug })).unwrap();
        setName("");
        setTeam("");
        setSlug("");
      } catch (err) {
        console.error("Failed to save the post: ", err);
      } finally {
        setAddRequestStatus("pending");
        history.push(`/`);
      }
    }
  };

  return (
    <ModalContainer>
      {addRequestStatus !== "pending" ? (
        <>
          <ModalContainerClose>
            <Link
              to={{
                pathname: `/`,
              }}
            ></Link>
          </ModalContainerClose>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Nome do jogador</IonLabel>
              <IonInput
                value={name}
                placeholder="Name"
                onIonChange={onNameChanged}
                type="text"
                autocapitalize="true"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Time</IonLabel>
              <IonSelect
                value={team}
                placeholder="Selecione"
                onIonChange={onTeamChanged}
              >
                {teams.map((team: any) => (
                  <IonSelectOption key={team.id} value={team.name}>
                    {team.name}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonList>
          <IonButton
            expand="block"
            shape="round"
            color="success"
            type="button"
            onClick={onSavePostClicked}
          >
            Adicionar Jogador
          </IonButton>
        </>
      ) : (
        <>
          <IonSpinner className="loading" name="crescent" color="primary" />
          <p>Aguarde...</p>
        </>
      )}
    </ModalContainer>
  );
};

const EditUser = ({ match }: any) => {
  const { userId } = match.params;

  const post = useSelector((state: any) =>
    state.users.items.find((user: any) => user.id === userId)
  );

  const [name, setName] = useState(post.name);
  const [team, setTeam] = useState(post.team);
  const [slugTeam, setSlugTeam] = useState(post.slugTeam);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSlugify = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const onNameChanged = (e: any) => setName(e.target.value);
  const onTeamChanged = (e: any) => {
    setTeam(e.target.value);
    const slugName = onSlugify(e.target.value);
    setSlugTeam(slugName);
  };

  const onSavePostClicked = () => {
    if (name) {
      dispatch(
        itemUpdated({
          id: userId,
          name,
          team,
          slugTeam,
        })
      );
      history.push(`/`);
    }
  };

  return (
    <ModalContainer>
      <ModalContainerClose>
        <Link
          to={{
            pathname: `/`,
          }}
        ></Link>
      </ModalContainerClose>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Nome do jogador</IonLabel>
          <IonInput
            value={name}
            placeholder="Name"
            onIonChange={onNameChanged}
            type="text"
            autocapitalize="true"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Time</IonLabel>
          <IonSelect
            value={team}
            placeholder="Selecione"
            onIonChange={onTeamChanged}
          >
            {teams.map((team: any) => (
              <IonSelectOption key={team.id} value={team.name}>
                {team.name}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
      </IonList>
      <IonButton
        expand="block"
        shape="round"
        color="warning"
        type="button"
        onClick={onSavePostClicked}
      >
        Editar Jogador
      </IonButton>
    </ModalContainer>
  );
};

const App: React.FC = () => {
  const postStatus = useSelector((state: RootState) => state.users.status);
  return (
    <IonApp>
      <IonReactRouter>
        <Header />
        <UsersContainer>
          {postStatus !== "pending" ? (
            <UsersList />
          ) : (
            <IonSpinner className="loading" name="crescent" color="primary" />
          )}
        </UsersContainer>
        <Switch>
          <Route path="/addUser" component={AddUser} />
          <Route path="/editUser/:userId" component={EditUser} />
          <Redirect to="/" />
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
