import PropTypes from 'prop-types';
import { Label, P } from './ContactFilter.styled';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <Label>
      <P>Find contacts by name</P>
      <input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
