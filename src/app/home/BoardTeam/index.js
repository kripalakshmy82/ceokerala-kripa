"use client";

import { Container } from "react-bootstrap";
import { AppSection, AppBox, AppCard, AvatarInfo } from "@/app/_components";
import classNames from "classnames";

const BoardTeam = ({ data }) => {
  const boardTeamCx = classNames({
    "d-flex gap-4": true,
    "flex-column flex-lg-row flex-md-row flex-sm-column": true,
    "justify-content-between align-items-center": true,
  });

  return (
    <AppSection id="board-team" className="board-team section-block-team">
      <Container>
        <AppBox className={boardTeamCx}>
          {data.map(({ id, ...rest }) => (
            <AppCard key={id} cardType="hover">
              <AppBox className="px-2 py-5">
                <AvatarInfo {...rest} />
              </AppBox>
            </AppCard>
          ))}
        </AppBox>
      </Container>
    </AppSection>
  );
};

export default BoardTeam;
