import authReducer from "./authReducer";
import { groupsReducer, groupCreateReducer } from "./groupsReducer";
import { combineReducers } from "redux";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import usergroupReducer from "./usergroupReducer";
import { tagsReducer } from "./tagsReducer";
// combines all the reducers to one
export default combineReducers({
  auth: authReducer,
  groups: groupsReducer,
  groupCreate: groupCreateReducer,
  posts: postReducer,
  comments: commentReducer,
  userGroup: usergroupReducer,
  tags: tagsReducer
});
