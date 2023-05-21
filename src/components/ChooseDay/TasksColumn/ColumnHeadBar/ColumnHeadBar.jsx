import ColumnToolbar from 'components/ColumnToolbar/ColumnToolbar';
import React from 'react';
import {
  ColumnHeadBarWrapper,
  ColumnHeadBarTitle,
} from './ColumnHeadBar.styled';

export default function ColumnHeadBar({ column, tasksForDeleteColumn }) {
  
  return (
    <ColumnHeadBarWrapper>
      <ColumnHeadBarTitle>{column.title}</ColumnHeadBarTitle>
      <div>
        <ColumnToolbar
          column={column}
          tasksForDeleteColumn={tasksForDeleteColumn}
        />
      </div>
    </ColumnHeadBarWrapper>
  );
}

// 1. Компонент отримує в пропсах заголовок колонки групи та ідентифікатор ступеню виконання задач в цій колонці (To do | In progress | Done)
// 2. Компонент рендерить блок розмітки
//  - з заголовком колонки,
//  - кнопкою для створення нової задачі, що відкриває модалку для створення задачі.
