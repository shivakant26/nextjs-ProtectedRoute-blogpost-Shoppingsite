import styles from "@/styles/About.module.css";
import aboutFirst from "../assets/images/about-01.jpg";
const About = () => {
  return (
    <>
      <section className={styles.banner_section}>
        <h2 className={styles.text_102}>About</h2>
        <div className={styles.overlay}></div>
      </section>
      <div className={styles.our_story_section}>
        <div className="center_wr">
          <div className="clearfix">
            <div className={styles.our_text}>
              <h4>Our Story</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales
                metus scelerisque congue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                gravida justo eu arcu egestas convallis. Nullam eu erat
                bibendum, tempus ipsum eget, dictum enim. Donec non neque ut
                enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                Proin ut est diam. Donec condimentum euismod tortor, eget
                facilisis diam faucibus et. Morbi a tempor elit.
              </p>
              <p>
                Donec gravida lorem elit, quis condimentum ex semper sit amet.
                Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
                fringilla turpis in vehicula vehicula. Pellentesque congue ac
                orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a
                arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque,
                magna vel dictum rutrum, neque justo eleifend elit, vel
                tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
                efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                ligula.
              </p>
              <p>
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </div>
            <div className={styles.our_image}>
              <div className={styles.image_outer}>
                <div className={styles.image_inner}>
                  <img src={aboutFirst.src} alt="about_1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.our_mission_section}>
        <div className="center_wr">
          <div className="clearfix">
            <div className={styles.our_mission_image}>
              <div className={styles.image_outer}>
                <div className={styles.image_inner}>
                  <img src={aboutFirst.src} alt="about_1" />
                </div>
              </div>
            </div>
            <div className={styles.our_mission_text}>
              <h4>Our Mission</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales
                metus scelerisque congue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                gravida justo eu arcu egestas convallis. Nullam eu erat
                bibendum, tempus ipsum eget, dictum enim. Donec non neque ut
                enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                Proin ut est diam. Donec condimentum euismod tortor, eget
                facilisis diam faucibus et. Morbi a tempor elit.
              </p>
              <p>
                Donec gravida lorem elit, quis condimentum ex semper sit amet.
                Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
                fringilla turpis in vehicula vehicula. Pellentesque congue ac
                orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a
                arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque,
                magna vel dictum rutrum, neque justo eleifend elit, vel
                tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
                efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                ligula.
              </p>
              <p>
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
