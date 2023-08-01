"use client";
import { Container } from "react-bootstrap";
import { AppSection, AppBox, AppText, AppCard } from "@/app/_components";


const CardCeo = ({ data }) => {
  return (
    <AppSection id="ceo-desk" className="ceo-desk-box section-block-md">
      <Container>
        <AppCard isShadow>
          <AppBox className="d-flex flex-row align-items-start p-5 gap-4">
            <AppBox className="ceo-icon">
                <img src={data.img.url} alt={data.img.alt} />
            </AppBox>
            <AppBox className="ceo-content">
                <AppText render={() => <h4>{data.name}</h4>} />
                <AppText  render={() => <h6 className="mb-4">{data.designation}</h6>}/>
                <AppText render={() => <p className="mb-0">{data.description}</p>}/>
            </AppBox>
          </AppBox>
        </AppCard>
      </Container>
    </AppSection>
  );
};

export default CardCeo;
