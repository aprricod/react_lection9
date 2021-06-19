import axios from "axios";

const PENDING = "pending";
const SUCCES = "succes";
const ERROR = "error";

const fetchUser = () => {
  console.log("fetch user...");
  return axios

    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const fetchPosts = () => {
  console.log("fetch post...");
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const wrapPromise = (promise) => {
  let status = PENDING;
  let result;
  let suspend = promise.then(
    (res) => {
      status = SUCCES;
      result = res;
    },
    (error) => {
      status = ERROR;
      result = error;
    }
  );
  return {
    read() {
      if (status === PENDING) {
        throw suspend;
      } else if (status === ERROR) {
        throw result;
      } else if (status === SUCCES) {
        return result;
      }
    },
  };
};

export const fetchData = () => {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  return { user: wrapPromise(userPromise), posts: wrapPromise(postsPromise) };
};
