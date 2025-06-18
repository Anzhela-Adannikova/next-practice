import { Note } from '@/lib/api';
import NoteItem from '../NoteItem/NoteItem';

type Props = {
  notes: Note[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <ul>
      {notes.map(notes => (
        <NoteItem key={notes.id} item={notes} />
      ))}
    </ul>
  );
};

export default NoteList;
