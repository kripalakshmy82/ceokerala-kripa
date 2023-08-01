import Form from "react-bootstrap/Form";

export default function AppSelect({ options }) {
  return (
    <Form.Select aria-label="select year" className="border-0">
      {options.map((i) => (
        <option value={i} key={i}>
          {i}
        </option>
      ))}
    </Form.Select>
  );
}
