import Head from "next/head";
const Footer = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <footer>
        <div class="footer-content">
          <h3>React Developer</h3>
          <p>
            This Template is a blog website where you will find great tutorials
            on web design and development. Here each tutorial is beautifully
            described step by step with the required source code.
          </p>
          <ul class="socials">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.google.com/" target="_blank">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <i class="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://in.linkedin.com/" target="_blank">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>
            copyright &copy; <a href="/">React Developer</a>{" "}
          </p>
          <div class="footer-menu">
            <ul class="f-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
