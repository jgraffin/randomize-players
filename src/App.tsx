import {
  Link,
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  RefresherEventDetail,
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
  ModalContainer,
  ModalContainerClose,
  UsersContainer,
} from "./styles/App";
import {
  addPost,
  itemUpdated,
  selectAllItems,
} from "./features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "./app/store";
import Header from "./components/header/Header";
import { teams } from "./features/teams/TeamsSlice";

setupIonicReact();

const AddUser = () => {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [slug, setSlug] = useState("");
  const [newArray, setNewArray] = useState<any>(teams);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const posts = useSelector(selectAllItems);
  const dispatch = useDispatch();
  const history = useHistory();
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

  useEffect(() => {
    const newValue = teams.filter((item: any) => {
      return posts.every((newItem: any) => item.slug !== newItem.slug);
    });

    setNewArray(newValue);
  }, [posts]);

  return (
    <ModalContainer>
      {addRequestStatus !== "pending" ? (
        <div className="wrapper">
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
                {newArray.map((team: any) => (
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
        </div>
      ) : (
        <>
          <IonSpinner className="loading" name="crescent" color="light" />
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

  const postsEdit = useSelector(selectAllItems);
  const [name, setName] = useState(post.name);
  const [team, setTeam] = useState(post.team);
  const [slug, setSlug] = useState(post.slug);
  const [newArrayEdit, setNewArrayEdit] = useState<any>(teams);
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
    setSlug(slugName);
  };

  const onSavePostClicked = () => {
    dispatch(
      itemUpdated({
        id: userId,
        name,
        team,
        slug,
      })
    );
    history.push(`/`);
  };

  useEffect(() => {
    const newValue = teams.filter((item: any) => {
      return postsEdit.every((newItem: any) => item.slug !== newItem.slug);
    });

    setNewArrayEdit(newValue);
  }, [postsEdit]);

  return (
    <ModalContainer>
      <div className="wrapper">
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
              {newArrayEdit.map((team: any) => (
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
      </div>
    </ModalContainer>
  );
};

const ShuffleUsers = () => {
  const location = useLocation();
  const { data } = location.state as any;
  const [hasRandom, setHasRandom] = useState(false);

  const shuffledItems = [...data];

  for (let i = shuffledItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffledItems[i];
    shuffledItems[i] = shuffledItems[j];
    shuffledItems[j] = temp;
  }

  useEffect(() => {
    setTimeout(() => {
      setHasRandom(true);
    }, 3000);
  }, []);

  return (
    <ModalContainer>
      <div className="wrapper wrapper--shuffled">
        {hasRandom ? (
          <>
            <ul>
              {shuffledItems.map((item: any) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <Link
              className="button primary"
              to={{
                pathname: `/`,
              }}
            >
              Voltar
            </Link>
          </>
        ) : (
          <>
            <IonSpinner
              className="loading loading--shuffle"
              name="crescent"
              color="primary"
            />
            <p>Sorteando jogadores, aguarde...</p>
          </>
        )}
      </div>
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
          <Route exact path="/shuffleUsers" component={ShuffleUsers} />
          <Redirect to="/" />
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
