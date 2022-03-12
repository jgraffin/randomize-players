import { IonHeader, IonImg } from "@ionic/react";
import { Container } from "./styles";

import Logo from "./logo.png";

const Header = () => (
  <IonHeader className="ion-no-border">
    <Container>
      <IonImg src={Logo} alt="" />
    </Container>
  </IonHeader>
);

export default Header;
