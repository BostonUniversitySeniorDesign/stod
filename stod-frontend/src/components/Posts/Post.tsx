import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Popper,
} from "@material-ui/core";
import Chip from "@material-ui/core/Chip/Chip";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isTemplateExpression } from "typescript";
import { loadAllPosts } from "../../actions/postActions";
import { IPost, IRootState } from "../../actions/types";
import PostMenu from "./PostMenu";
import PostContextProvider from "./PostContext";

const Post: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <Card style={{ maxWidth: 600, margin: "30px" }}>
      <CardHeader title={post.title} />
      <CardContent>
        <Typography variant="body2" color="textPrimary">
          {post.contents}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body2" color="textSecondary"></Typography>
        <PostMenu post={post}/>
        {/* <Typography variant="body2" color="textSecondary" style={{textAlign: "right"}}>
                        User: {post.poster}
                  </Typography> */}
      </CardContent>
    </Card>
  );
};

export default Post;
