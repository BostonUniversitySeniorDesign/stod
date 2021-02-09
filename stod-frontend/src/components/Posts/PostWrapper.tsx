import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllPosts } from "../../actions/postActions";
import { IPost, IRootState } from "../../actions/types";
import Post from "./Post";
import PostContextProvider from "./PostContext";

const PostWrapper: React.FC = () => {
  const dispatch = useDispatch();

  let currentState = useSelector((state: IRootState) => state.posts);
  useEffect(() => {
    dispatch(loadAllPosts());
  }, []);
  if (!currentState.isLoading) {
    return (
     
      <PostContextProvider>
        {/* <form>
          <label>
            Title:
            <input type="text" name="title">
            </input>
          </label>
          <label>
            Body:
            <input type="text" name="title">
            </input>
          </label>
        </form> */}
        {currentState.posts.map((post: IPost) => {
          return (
            <div>
              <Post post={post} showPostMenu={true} key={post.id}/>
            </div>
          );
        })}
      </PostContextProvider>
    );
  } else {
    return <h2>Loading</h2>;
  }
};

export default PostWrapper;
