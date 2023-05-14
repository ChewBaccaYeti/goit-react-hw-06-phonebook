import { Label, P } from './ContactFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContact } from 'redux/filtersSlice';
import { getFilters } from 'redux/selector';

export const ContactFilter = () => {
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();

  const changeFilter = ({ target: { value } }) => {
    dispatch(filteredContact(value.trim()));
  };

  return (
    <Label>
      <P>Find contacts by name</P>
      <input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};
