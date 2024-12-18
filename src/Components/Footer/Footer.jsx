import styles from "./Footer.module.scss";
import { Links } from "./FooterDetails";
import IonIcon from "./IonIcon";
import Link from "./Link";

const Footer = () => {
  return (
    <ul className={styles["footer"]}>
      <li>
        <h3 className={styles["footer-h3"]}>Exclusive</h3>
        <a className={styles["footer-link__1"]}>Subscribe</a>
        <a className={styles["footer-link"]}>Get 10% off your first order</a>
        <div className={styles["input-div"]}>
          <input placeholder="Enter your email" />
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.91199 9.9998H2.99999L1.02299 2.1348C1.01033 2.0891 1.00262 2.04216 0.999989 1.9948C0.977989 1.2738 1.77199 0.773804 2.45999 1.1038L21 9.9998L2.45999 18.8958C1.77999 19.2228 0.995989 18.7368 0.999989 18.0288C1.00201 17.9655 1.01313 17.9029 1.03299 17.8428L2.49999 12.9998"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </li>

      <li>
        <h3>Support</h3>
        {Links.slice(0, 3).map((link, index) => (
          <Link name={link} key={index} />
        ))}
      </li>

      <li>
        <h3>Account</h3>
        {Links.slice(3, 8).map((link, index) => (
          <Link name={link} key={index} />
        ))}
      </li>

      <li>
        <h3>Quick Link</h3>
        {Links.slice(8, 12).map((link, index) => (
          <Link name={link} key={index} />
        ))}
      </li>

      <li>
        <h3>Download App</h3>
        <p>Save $3 with App New User Only</p>
        <div className={styles["download-div"]}>
          <img className={styles["qr-code"]} src="/qr-code.jpg" />
          {/* <div className={styles["download-div2"]}>
            <img className={styles["download-div2-img1"]} src="/google.png" />
            <img className={styles["download-div2-img2"]} src="/apple.png" />
          </div> */}
        </div>
        <div className={styles["social-media-icons"]}>
          <IonIcon icon="facebook" />
          <IonIcon icon="twitter" />
          <IonIcon icon="instagram" />
          <IonIcon icon="linkedin" />
        </div>
      </li>
    </ul>
  );
};

export default Footer;
