import { Container } from "@/styled.root.ts";
import {
  Card,
  CardDescription,
  CardsWrapper,
  CardTitle,
  CardWrapper,
  Title,
  Type,
} from "@/sections/Rate/styled.ts";

const Rate = () => {
  return (
    <Container>
      <Title>
        Выбери&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;свой&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;тариф
      </Title>
      <CardsWrapper>
        <CardWrapper>
          <Card>
            <CardTitle>Базовый</CardTitle>
            <CardDescription>
              Ведение по рациону питания/обучение на 1 месяц
            </CardDescription>
            <ul>
              <li>Составление сбалансированного рациона, корректировки</li>
              <li>
                Обучение по средствам обратной связи (текст, голосовые,
                видео-встречи)
              </li>
              <li>Общие рекомендации по активности и образу жизни</li>
            </ul>
          </Card>
          <Type>Серебро</Type>
        </CardWrapper>
      </CardsWrapper>
    </Container>
  );
};

export default Rate;
