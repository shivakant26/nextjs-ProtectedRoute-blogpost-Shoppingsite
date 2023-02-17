import styles from "@/styles/About.module.css";

const Contact = () => {
  return (
    <>
      <section className={styles.banner_section}>
        <h2 className={styles.text_102}>Contact</h2>
        <div className={styles.overlay}></div>
      </section>
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14723.98117682483!2d75.88776299999999!3d22.691219099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676617078122!5m2!1sen!2sin"
          width="100%"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
