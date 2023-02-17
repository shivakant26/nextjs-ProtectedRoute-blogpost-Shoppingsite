import Banner from "@/Component/Common/Banner";
import { allPost } from "@/Redux/blogSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const [blogList, setBlogList] = useState([]);
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state?.blogSlice);

  useEffect(() => {
    dispatch(allPost());
  }, []);

  useEffect(() => {
    if (blog?.data?.posts?.length) {
      setBlogList(blog?.data?.posts);
    }
  }, [blog]);
  
  return (
    <>
    <Banner />
      <div className="card_wrapper">
      <div className="container">
        {blogList.map((item, index) => {
          return (
            <div className="card">
              <div className="card__header">
                <img
                  src="https://source.unsplash.com/600x400/?computer"
                  alt="card__image"
                  className="card__image"
                  width="600"
                />
                <div className="overlay_header"></div>
              </div>
              <div class="card__body">
                {
                  item?.tags?.map((tag,index)=>{
                    return(
                      <span className="tag tag-blue">{tag}</span>
                    )
                  })
                }
                <h4>{item.title}</h4>
                <div className="description">
                <p>{item.body}</p>
                </div>
                <div className="read-more">
                  <a href={`/blog/${item.id}`}>read more</a>
                </div>
              </div>
              <div className="card__footer">
                <div className="user">
                  <div className="user_image">
                  <img
                    src="https://i.pravatar.cc/40?img=1"
                    alt="user__image"
                    className="user__image"
                  />
                  </div>
                  <div className="user__info">
                    <h5>Jane Doe</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Blog;
