import { IonButton, IonItem, IonRippleEffect } from "@ionic/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { RootState } from "../../app/store";
import {
  AddUserButton,
  AreaButtons,
  PlayersAmount,
  RandomizePlayersButton,
} from "../../styles/App";
import { deletePost, fetchPosts, selectAllItems } from "../users/usersSlice";
import { ContainerList } from "./ContainerList";

const User = ({ post }: any) => {
  const dispatch = useDispatch();
  const onDeletePostClicked = (id: string) => {
    dispatch(deletePost({ id }));
  };

  return (
    <IonItem className="ion-no-padding ion-no-border" key={post.id}>
      <Link
        to={{
          pathname: `/editUser/${post.id}`,
        }}
        style={{ display: "flex", alignItems: "center" }}
      >
        <div style={{ width: "60px" }}>
          <img src={`./assets/images/${post.id}.png`} alt={post.team} />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <h5>{post.team}</h5>
          <h1>{post.name}</h1>
        </div>
      </Link>
      <div>
        <IonButton onClick={() => onDeletePostClicked(post.id)}>
          delete
        </IonButton>
      </div>
    </IonItem>
  );
};

const NoResults = () => <p>Para o sorteio, comece adicionando os jogadores.</p>;

export const UsersList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllItems);
  const postStatus = useSelector((state: RootState) => state.users.status);
  const error = useSelector((state: RootState) => state.users.error);

  const playersAmount = () => {
    const singular = "JOGADOR";
    const amount = posts.length;
    let paragraph;
    if (amount > 1) {
      paragraph = (
        <p>
          <strong>{"0" + amount}</strong> {`${singular}ES`}
        </p>
      );
    } else if (amount === 1) {
      paragraph = (
        <p>
          <strong>{"0" + amount}</strong> {`${singular}`}
        </p>
      );
    } else if (amount > 9) {
      paragraph = (
        <p>
          <strong>{"0" + amount}</strong> {`${singular}ES`}
        </p>
      );
    }

    return paragraph;
  };

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === "loading") {
    content = "Loading...";
  } else if (postStatus === "succeeded") {
    content = posts.length ? (
      posts.map((post: any) => <User key={post.id} post={post} />)
    ) : (
      <NoResults />
    );
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
      <PlayersAmount>{playersAmount()}</PlayersAmount>
      <ContainerList>{content}</ContainerList>
      <AreaButtons>
        <AddUserButton className="ion-activatable ripple-parent">
          <Link
            to={{
              pathname: `/addUser`,
            }}
          >
            +
          </Link>
          <IonRippleEffect></IonRippleEffect>
        </AddUserButton>
        {posts.length > 2 && (
          <RandomizePlayersButton className="ion-activatable ripple-parent">
            <IonRippleEffect></IonRippleEffect>
          </RandomizePlayersButton>
        )}
      </AreaButtons>
    </>
  );
};
