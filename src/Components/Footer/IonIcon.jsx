import "./Footer.module.scss";

const IonIcon = ({ icon }) => {
  return (
    <a>
      <ion-icon name={`logo-${icon}`} />
    </a>
  );
};

export default IonIcon;
