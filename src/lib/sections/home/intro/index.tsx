import { Button } from "src/lib/base/StyledComponents/Buttons";
import { CardYellow } from "src/lib/base/StyledComponents/Card";
import { Column, Row } from "src/lib/base/StyledComponents/Flex";
import Text from "src/lib/base/Text";
import VideoAnimation from "src/public/animations/videoMedia";

const IntroSection = () => {
  return (
    <Row responsive stretch p={4} h="100%">
      <CardYellow>
        <Text tag="h1" size={14}>
          Fox Recorder
        </Text>
        <Text tag="p" size={7}>
          Grave sua tela de forma fácil, rápida e online. Sem downloads, sem
          complicações — comece a capturar agora com apenas um clique!
        </Text>
        <p>
          Lorem ffsef mskmefosem oissoief mnosienfo snmosno sofmnesoikfms
          mosmiosmoe
        </p>
        <Button>Open Application</Button>
      </CardYellow>

      <Column>
        <VideoAnimation />
      </Column>
    </Row>
  );
};

export default IntroSection;
