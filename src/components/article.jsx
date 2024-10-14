import { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

const loaderStyle = {
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function Newsletter() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <CircularProgress style={loaderStyle} />;
  }

  if (error) {
    return (
      <Typography color="error">
        Error loading posts: {error.message}
      </Typography>
    );
  }

  if (posts.length === 0) {
    return (
      <Typography fontSize={"4rem"} textAlign={"center"} height={"100vh"}>
        No posts available!
      </Typography>
    );
  }

  return (
    <Container
      className="relative"
      sx={{ position: "relative", padding: "2rem" }}
    >
      <Typography variant="h4" sx={{ margin: "2rem" }} gutterBottom>
        Newsletter
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/newsletter/create"
        sx={{ position: "absolute", right: 0, top: 0 }}
      >
        Create Post
      </Button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <Card key={post.id} sx={{ marginBottom: "2rem" }}>
            <CardMedia
              component="img"
              height="140"
              image={post.image}
              alt={post.heading}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {post.heading}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.description}
              </Typography>
              <Typography variant="subtitle2" color="text.primary">
                {post.author}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {post.publishdate}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                component={Link}
                to={`/newsletter/${post.id}`}
              >
                Read more
              </Button>
            </CardActions>
          </Card>
        ))}
      </ul>
    </Container>
  );
}

export default Newsletter;
