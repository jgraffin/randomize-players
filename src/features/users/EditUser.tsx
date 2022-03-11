import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { itemUpdated } from "./usersSlice";

export const EditUser = ({ match }: any) => {
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
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-padding">
          <h2>Edit Post</h2>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form>
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
                <IonSelectOption value="Real Madrid">
                  Real Madrid
                </IonSelectOption>
                <IonSelectOption value="Chealsea">Chealsea</IonSelectOption>
                <IonSelectOption value="Arsenal">Arsenal</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
        </form>
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
      </IonContent>
    </IonPage>
  );
};
