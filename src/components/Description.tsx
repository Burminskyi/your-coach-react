import styled from "@emotion/styled";
import image from "../assets/pexels-victor-freitas-841130.jpg";
import workoutJournalImage from "../assets/shutterstock_564335488_1024x1024.webp";
import workoutPlanImage from "../assets/Workout-Plan_6x4_Blog.jpg";
import workoutStatisticImage from "../assets/TOP-fitness-aplikacie-na-cvicenie-sledovanie-kalorii-meranie-pokroku-a-vykonnosti.webp";

const StyledDescription = styled.section`
  max-width: 1280px;
  width: 80%;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const DescriptionSectionWrap = styled.div`
  height: 100vh;
`;

const DescriptionSection = styled.div`
  height: calc(50vh - 30px);
  display: flex;
  gap: 30px;
  padding: 15px;
`;

const DescriptionSectionLarge = styled.div`
  width: 70%;
  border-radius: 20px;
  border: 2px solid #9c27b0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.15);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const DescriptionSectionSmall = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.secondary {
    align-items: end;
    p {
      text-align: end;
    }
  }
`;

const DescriptionSectionCount = styled.span`
  color: #9c27b0;
  font-size: 96px;
`;

const DescriptionSectionHeader = styled.h2`
  margin-bottom: 10px;
`;

const DescriptionSectionText = styled.p``;

export default function Description() {
  return (
    <StyledDescription>
      <DescriptionSectionWrap>
        <DescriptionSection>
          <DescriptionSectionSmall className="secondary">
            <DescriptionSectionCount>1</DescriptionSectionCount>
            <DescriptionSectionHeader>Workout Journal</DescriptionSectionHeader>
            <DescriptionSectionText>
              Keep a detailed log of your workouts: add exercises, parameters,
              repetitions, and weight for each set.
            </DescriptionSectionText>
          </DescriptionSectionSmall>
          <DescriptionSectionLarge
            style={{ backgroundImage: `url(${workoutJournalImage})` }}
          />
        </DescriptionSection>
        <DescriptionSection>
          <DescriptionSectionLarge
            style={{ backgroundImage: `url(${workoutPlanImage})` }}
          />
          <DescriptionSectionSmall>
            <DescriptionSectionCount>2</DescriptionSectionCount>
            <DescriptionSectionHeader>
              Workout Planning
            </DescriptionSectionHeader>
            <DescriptionSectionText>
              Create workout plans for future dates to be prepared for upcoming
              exercises in advance.
            </DescriptionSectionText>
          </DescriptionSectionSmall>
        </DescriptionSection>
      </DescriptionSectionWrap>
      <DescriptionSectionWrap>
        <DescriptionSection>
          <DescriptionSectionSmall className="secondary">
            <DescriptionSectionCount>3</DescriptionSectionCount>
            <DescriptionSectionHeader>
              Statistics and Progress
            </DescriptionSectionHeader>
            <DescriptionSectionText>
              Track your progress, view statistics of completed workouts, and
              monitor improvements.
            </DescriptionSectionText>
          </DescriptionSectionSmall>
          <DescriptionSectionLarge
            style={{ backgroundImage: `url(${workoutStatisticImage})` }}
          />
        </DescriptionSection>
        <DescriptionSection>
          <DescriptionSectionLarge
            style={{ backgroundImage: `url(${image})` }}
          />
          <DescriptionSectionSmall>
            <DescriptionSectionCount>4</DescriptionSectionCount>
            <DescriptionSectionHeader>
              Personalized Profile
            </DescriptionSectionHeader>
            <DescriptionSectionText>
              Customize your profile, add body parameters for more accurate
              tracking of results.
            </DescriptionSectionText>
          </DescriptionSectionSmall>
        </DescriptionSection>
      </DescriptionSectionWrap>
    </StyledDescription>
  );
}
