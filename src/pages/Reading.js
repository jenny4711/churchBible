import React from "react";
import {Form,Container,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { readingActions } from '../action/ReadingAction';
import '../CSS/Reading.css'
const Reading = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.qt.error);
  const [formData, setFormData] = React.useState({
    title: "",
    main: "",
    feelingContent: "",
  });

  function handleChange(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  function addingReading(evt) {
    evt.preventDefault();
    const {title,main,feelingContent}= formData; 
    dispatch(readingActions.addReading({title,main,feelingContent},navigate)); 
    
  }


  return (
    <Container className="reading-area">
      <Form className='reading-form' onSubmit={addingReading}>
        <div className='insideOf_form'>
        <Form.Group className="mb-3 group-spacing" controlId="exampleForm.ControlInput1">
          <Form.Label className='label-spacing'>과제목</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="과제목"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 group-spacing " controlId="exampleForm.ControlTextarea1">
          <Form.Label  className='label-spacing'>주요 내용</Form.Label>
          <br/>
          <Form.Control
           name="main" 
           type='text'
           onChange={handleChange}
           as="textarea" 
           className='text_area'
           rows={15} />
        </Form.Group>

        <Form.Group className="mb-3 group-spacing " controlId="exampleForm.ControlTextarea1">
          <Form.Label  className='label-spacing'>묵상 내용</Form.Label>
          <br/>
          <Form.Control
           name="feelingContent" 
           type='text'
           onChange={handleChange}
           as="textarea" 
           className='text_area'
           rows={15} />
        </Form.Group>
        <Button className='Reading-btn' variant="danger" type="submit">
          저장
        </Button>
        </div>
      </Form>
    </Container>
  )
}

export default Reading