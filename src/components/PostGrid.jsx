import { PostCard } from "./PostCard";

export const PostGrid = ({ posts }) => {
  return  (
    <>
        <div>
            {posts.length ? (
                posts.map((item) => <PostCard {...item}/>)
            ) : (
                <h1>No Hay Posts</h1>
            )}
        </div>
    </>
  );
};