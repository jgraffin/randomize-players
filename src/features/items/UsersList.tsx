import { IonButton, IonItem, IonRippleEffect, IonSpinner } from "@ionic/react";
import { FC, ReactNode, useEffect } from "react";
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
import EditIcon from "./icon-edit.svg";
import DeleteIcon from "./icon-delete.svg";

const User = ({ post }: any) => {
  const dispatch = useDispatch();
  const onDeletePostClicked = (id: string) => {
    dispatch(deletePost({ id }));
  };

  return (
    <IonItem
      className="content-item ion-no-padding ion-no-border"
      key={post.id}
    >
      <div className="content-item__image">
        <img src={`./assets/images/${post.slug}.png`} alt={post.team} />
      </div>
      <div className="content-item__text">
        <h5>{post.team}</h5>
        <h1>{post.name}</h1>
      </div>
      <div className="content-item__actions">
        <Link
          to={{
            pathname: `/editUser/${post.id}`,
          }}
        >
          <img src={EditIcon} alt={`Delete ${post.name}`} />
        </Link>
        <IonButton
          className="content-item__actions__delete ion-no-border"
          onClick={() => onDeletePostClicked(post.id)}
        >
          <img src={DeleteIcon} alt={`Delete ${post.name}`} />
        </IonButton>
      </div>
    </IonItem>
  );
};

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

      if (amount > 9) {
        paragraph = (
          <p>
            <strong>{amount}</strong> {`${singular}ES`}
          </p>
        );
      }
    } else if (amount === 1) {
      paragraph = (
        <p>
          <strong>{"0" + amount}</strong> {`${singular}`}
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
    <IonSpinner className="loading" name="crescent" color="primary" />;
  } else if (postStatus === "succeeded") {
    content = posts.length ? (
      posts.map((post: any) => <User key={post.id && post.id} post={post} />)
    ) : (
      <p>
        Para o sorteio,
        <br />
        comece adicionando
        <br />
        os jogadores.
      </p>
    );
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  console.log(postStatus);

  return (
    <>
      {postStatus !== "loading" ? (
        <>
          <PlayersAmount>{playersAmount()}</PlayersAmount>
          <ContainerList>{content}</ContainerList>
          <AreaButtons>
            <AddUserButton className="ion-activatable ripple-parent">
              <Link
                to={{
                  pathname: `/addUser`,
                }}
              ></Link>
              <IonRippleEffect></IonRippleEffect>
            </AddUserButton>
            {posts.length > 2 && (
              <RandomizePlayersButton className="ion-activatable ripple-parent">
                <IonRippleEffect></IonRippleEffect>
              </RandomizePlayersButton>
            )}
          </AreaButtons>
        </>
      ) : (
        <IonSpinner className="loading" name="crescent" color="primary" />
      )}
    </>
  );
};
