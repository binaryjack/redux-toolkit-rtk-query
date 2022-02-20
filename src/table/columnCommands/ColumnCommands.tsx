import { FC } from 'react';
import './ColumnCommands.scss';

export type ColumnCommandsProps = {
  editAction: () => void
  deleteAction: () => void
};

const ColumnCommands: FC<ColumnCommandsProps> = ({ editAction, deleteAction }) => {

  return (
    <>
      <button onClick={() => editAction()}> Edit </button>
      <button onClick={() => deleteAction()}>Delete </button>
    </>
  );
};

export default ColumnCommands;
