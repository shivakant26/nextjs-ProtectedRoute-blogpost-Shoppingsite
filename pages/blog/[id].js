import { allPost } from "@/Redux/blogSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/styles/SinglePost.module.css";
import postImage from "../../assets/images/featureimage.jpg";
import articleImage from "../../assets/images/article.png";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const allpost = useSelector((state) => state?.blogSlice?.blog?.data?.posts);

  useEffect(() => {
    dispatch(allPost());
  }, []);

  return (
    <>
      <div className={styles.signle_blog_post}>
        <div className="center_wr">
          <div className={styles.post_content}>
            {allpost
              ?.filter((el) => {
                if (el.id === parseInt(router.query.id)) {
                  return el;
                }
              })
              .map((item, index) => {
                return (
                  <div className={styles.signle_post} key={index}>
                    <div className={styles.feature_image}>
                      <img src={postImage?.src} alt="feature_image" />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                  </div>
                );
              })}

            <div className={styles.feature_Article}>
              <h4>Feature Article</h4>
              {allpost
                ?.filter((el) => {
                  if (el.id <= 5) {
                    return el;
                  }
                })
                .map((items, index) => {
                  return (
                    <div className={styles.hrlt_card} key={index}>
                      <div className={styles.hr_fture_image}>
                        <div className={styles.hrtl_feature_image}>
                          <img
                            src={articleImage?.src}
                            alt="hrtl_feature_image"
                          />
                        </div>
                      </div>
                      <div className={styles.hr_fture_text}>
                        <h5>
                          <a href={`/blog/${items.id}`}>{items.title}</a>
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
