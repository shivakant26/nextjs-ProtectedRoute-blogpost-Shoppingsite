import Link from "next/link";
import styles from "@/styles/Header.module.css";
import { useState } from "react";
import LoginPopup from "./Common/LoginPopUp";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const showLogin = () => {
    setShow(true);
  };

  return (
    <>
      {show ? <LoginPopup show={show} onHide={handleClose} /> : null}
      <header>
        <div className={styles.top_header}>
          <div className="clearfix">
            <div className="center_wr">
              <div className={styles.th_left}>
                <p>Free shipping for standard order over $100</p>
              </div>
              <div className={styles.th_right}>
                <div className={styles.optionmenu}>
                  <a href="#">Help & FAQs</a>
                  <a
                    style={{ color: "#fff", cursor: "pointer" }}
                    onClick={showLogin}
                  >
                    My Account
                  </a>
                  <a href="#">EN</a>
                  <a href="#">USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.main_header}>
          <div className="clearfix">
            <div className="center_wr">
              <div className={styles.logo}>
                <a href="/">Shoping</a>
              </div>
              <div className={styles.menu}>
                <ul>
                  <li>
                    <Link
                      className={router.pathname == "/" ? "active" : ""}
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={router.pathname == "/shop" ? "active" : ""}
                      href="/shop"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={router.pathname == "/feature" ? "active" : ""}
                      href="/feature"
                    >
                      Feature
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={router.pathname == "/blog/" ? "active" : ""}
                      href="/blog/"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={router.pathname == "/about" ? "active" : ""}
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={router.pathname == "/contact" ? "active" : ""}
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
