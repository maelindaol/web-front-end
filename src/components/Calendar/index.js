import { Container } from "./styles";
import DatePicker from "react-datepicker";

export const Calendar = ({ onChange, startDate, endDate }) => {
  return (
    <Container className="calendar-div">
      <DatePicker
        onChange={onChange}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        selectsRange
      />
    </Container>
  );
};
