import React from 'react';
import { Card } from 'react-bootstrap';
import Content from '../../components/common/Content';
import './Author.scss';

export const Author: React.FC = () => (
  <Content>
    <Card border="light">
      <div className="author__card">
        <Card.Img className="author__card__image" src="/images/avatar.jpg" alt="author_photo" />
        <div className="author__card_wrapper">
          <Card.Title>Касмасов Валерий</Card.Title>
          <Card.Text className="m-1">+90 (535) 529-24-46</Card.Text>
          <Card.Text className="m-1">kosmos4v@gmail.com</Card.Text>
          <Card.Text className="m-1">45 лет, родился 27 ноября 1977</Card.Text>
        </div>
      </div>
    </Card>
    <Card className="p-5" border="primary">
      <Card.Title>Akkords.net - гитарные аккорды и обучение</Card.Title>
      <Card.Text className="m-1">Санкт-Петербург, akkords.dalimteam.ru/</Card.Text>
      <Card.Title className="p-2">Frontend developer</Card.Title>
      <Card.Text className="m-2 p-2">Работа вместе с владельцем продукта и командой: 3 фронта, 1 бэк, 1 дизайнер, PM, product owner, над созданием и развитием образовательного проекта.</Card.Text>
      <Card.Text className="m-1">
        Полностью удаленная работа full-time, обязанности:
        создание и расширение имеющихся common-компонентов ui-kit,
        публикация их в Storybook, полностью адаптивная верстка (CSS Flexbox),
        внедрение дизайна пользовательского интерфейса с использованием HTML5 и SASS
      </Card.Text>
      <Card.Text className="m-1">Стек: React / Redux-Saga / Sass / TypeScript;</Card.Text>
      <Card.Text className="m-1">Февраль 2022 — по настоящее время</Card.Text>
    </Card>
    <Card className="p-5" border="primary">
      <Card.Title>Onerollo - CRM система для управления частными школами</Card.Title>
      <Card.Text className="m-1">Шотландия, onerollo.com</Card.Text>
      <Card.Title className="p-2">Frontend developer</Card.Title>
      <Card.Text className="m-2 p-2">Система управлением лидами в лице студентов в частные школы и университеты. Core команда: 3 фронта, 1 бэк, дизайнер, 1 datascience, PM, product owner.</Card.Text>
      <Card.Text className="m-1">
        Полностью удаленная работа full-time, обязанности:
        создание новых компонентов по дизайнам из figma,
        создание и расширение имеющихся common-компонентов ui-kit,
        работа по SCRUM;
      </Card.Text>
      <Card.Text className="m-1">Стек: React / Redux-Saga / Sass / TypeScript;</Card.Text>
      <Card.Text className="m-1">Июнь 2021 — февраль 2022</Card.Text>
    </Card>
    <Card className="p-5" border="primary">
      <Card.Title>VistaJet</Card.Title>
      <Card.Text className="m-1">www.vistajet.com/</Card.Text>
      <Card.Title className="p-2">Frontend developer</Card.Title>
      <Card.Text className="m-2 p-2">Создание системы мониторинга перелетов для внутреннего пользования сотрудниками авиакомпании. Стек: react/redux, graphql, ui компоненты из библиотеки ant design.</Card.Text>
      <Card.Text className="m-1">В команде 3 фронта, 1 бэк, 1 qa и 1 dm</Card.Text>
      <Card.Text className="m-1">Декабрь 2019 — июнь 2021</Card.Text>
    </Card>
  </Content>
);
