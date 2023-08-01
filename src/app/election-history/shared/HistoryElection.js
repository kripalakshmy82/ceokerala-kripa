import { Container, Form } from "react-bootstrap";
import {
  AppSection,
  AppBox,
  AppText,
  AvatarInfo,
  AppButton,
} from "@/app/_components";
import { PromoCard } from "@/app/_components/AppCard";
import { promoCardData } from "@/app/data";

import classNames from "classnames";

import { historyListItem } from "@/app/data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SelectBasicExample() {
  return (
    <Form.Select aria-label="select year">
      <option value="1">2000 - 2010</option>
      <option value="2">2010 - 2014</option>
      <option value="3">2014 - 2020</option>
    </Form.Select>
  );
}

const HistoryElection = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sectionHeadingCx = classNames({
    "d-flex justify-content-between align-items-center": true,
  });
  return (
    <>
      <AppSection id="history" className="section-block-sm history-election">
        <Container>
          <AppBox className={sectionHeadingCx}>
            <AppBox className="section-heading">
              <AppText render={() => <h3>Election History</h3>} />
            </AppBox>
            <AppBox className="area-block d-flex flex-row gap-2">
              <AppText
                render={() => <h6 className="mb-0">Select the year</h6>}
              />
              <SelectBasicExample />
            </AppBox>
          </AppBox>
          <AppBox className="history-election">
            <Slider {...settings} className="history-carousel">
              {historyListItem.map(({ ...rest }, key) => (
                <AppBox className="py-5 rounded-3 shadow-sm" key={key}>
                  <AvatarInfo {...rest} direction="row" />
                </AppBox>
              ))}
            </Slider>
          </AppBox>
          <AppBox className="btn-box pt-5 d-flex justify-content-center">
            <AppButton
              title="See More"
              href="#"
              variant="themeBtn"
              anchorTitle="See more"
            />
          </AppBox>
        </Container>
      </AppSection>

      <AppSection id="promo-section" className="promo-section section-block-sm">
        <Container>
          <PromoCard type="promo" img={promoCardData.img} />
        </Container>
      </AppSection>
    </>
  );
};

export default HistoryElection;
