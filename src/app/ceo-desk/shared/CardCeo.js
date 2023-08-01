"use client";
import { Container } from "react-bootstrap";
import { AppSection, AppBox, AppText, AppCard } from "@/app/_components";

const ceoCardData = {
  name: "Sanjay Kaul IAS",
  designation: "Chief election commissioner",
  img: {
    url: "./assets/icon-avatar.png",
    alt: "image",
  },
  link: {
    href: "#",
    anchorTitle: "Sanjay Kaul IAS",
  },
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

const CardCeo = () => {
  return (
    <AppSection id="ceo-desk" className="ceo-desk-box section-block-md">
      <Container>
        <AppCard isShadow>
          <AppBox className="d-flex flex-row align-items-start p-5 gap-4">
            <AppBox className="ceo-icon">
                <img src={ceoCardData.img.url} alt={ceoCardData.img.alt} />
            </AppBox>
            <AppBox className="ceo-content">
                <AppText render={() => <h4>{ceoCardData.name}</h4>} />
                <AppText  render={() => <h6 className="mb-4">{ceoCardData.designation}</h6>}/>
                <AppText render={() => <p className="mb-0">{ceoCardData.description}</p>}/>
            </AppBox>
          </AppBox>
        </AppCard>
      </Container>
    </AppSection>
  );
};

export default CardCeo;
