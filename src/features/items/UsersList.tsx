import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { fetchPosts, selectAllItems } from "../users/usersSlice";

const User = ({ post }: any) => {
  return (
    <Link
      key={post.id}
      to={{
        pathname: `/editUser/${post.id}`,
        state: { modal: true },
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
  );
};

export const UsersList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllItems);
  const postStatus = useSelector((state: RootState) => state.users.status);
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === "loading") {
    content = "Loading...";
  } else if (postStatus === "succeeded") {
    content = posts.map((post: any) => <User key={post.id} post={post} />);
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <>{content}</>;
};
