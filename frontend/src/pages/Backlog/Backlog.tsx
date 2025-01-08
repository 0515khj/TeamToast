import React from 'react';
import BBoard from './BBoard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Backlog: React.FC = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{width:'100%'}}>
      <BBoard />
      </div>
    </DndProvider>
  );
};

export default Backlog;
