import React from "react";
import {Form,Container,Button,Alert} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { qtActions } from "../action/QtAction";
import '../CSS/Qttime.css'
const Qttime = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.qt.error);
  const [formData, setFormData] = React.useState({
    date: "",
    main: "",
    meditContent: "",
  });

  function handleChange(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  function addingQt(evt) {
    evt.preventDefault();
    const { date, main, meditContent } = formData; 
    dispatch(qtActions.addQt({ date, main, meditContent },navigate)); 
   
    
  }
  


  

  return (
    <Container className="qt-area">
      <Form className='qt-form' onSubmit={addingQt}>
        <div className='insideOf_form'>
        <Form.Group className="mb-3 group-spacing" controlId="exampleForm.ControlInput1">
          <Form.Label className='label-spacing'>날짜</Form.Label>
          <Form.Control
            name="date"
            type="date"
            className='input'
            placeholder="날짜"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 group-spacing" controlId="exampleForm.ControlInput1">
          <Form.Label className='label-spacing'>본문말씀</Form.Label>
          <Form.Control
            name="main"
            type="text"
            className='input'
            placeholder="본문 말씀"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 group-spacing " controlId="exampleForm.ControlTextarea1">
          <Form.Label  className='label-spacing'>묵상 내용</Form.Label>
          <br/>
          <Form.Control
           name="meditContent" 
           type='text'
           onChange={handleChange}
           as="textarea" 
           className='text_area'
           rows={10}
           cols={10} />
        </Form.Group>
        <Button className='Qttime-btn' variant="danger" type="submit">
          저장
        </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Qttime;
