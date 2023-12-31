import React,{useState} from 'react'
import { Container,Form,Button,Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate  } from "react-router";
import { Link } from "react-router-dom";
import { userActions } from '../action/userAction';
import '../CSS/Register.css'
const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const error = useSelector((state) => state.user.error);
  const [formData,setFormData]=useState({
    email:"",
    name:"",
    level:"",
    confirmPassword:"",
    password:"",
    season:"",
  })
  function register(evt){
    evt.preventDefault();
    const {email,name,level,confirmPassword,password,season}=formData
    if(password !==confirmPassword){
      setPasswordError("비밀번호 중혹확인이 일치하지 않습니다.")
      return;

    }
    setPasswordError("")
    dispatch(userActions.registerUser({email,name,level,confirmPassword,password,season},navigate));
    navigate('/login')
  }

  function handleChange(evt){
    evt.preventDefault();
    const {name,value}=evt.target
    setFormData({...formData,[name]:value})
  }

  return (
    <Container className="register-area">
      {error && (
        <div>
          <Alert variant="danger" className="error-message">
            {error}
          </Alert>
        </div>
      )}
      <Form className='register-form' onSubmit={register}>
        <Form.Group className="mb-3">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            name="email"
            className='Register-input'
            placeholder="이메일 을작성해주세요"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>이름</Form.Label>
          <Form.Control
          className='Register-input'
            type="text"
            name="name"
            placeholder="이름을 작성해주세요"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>기수</Form.Label>
          <Form.Control
          className='Register-input'
            type="text"
            name="season"
            placeholder="기수를 작성해주세요.(예:11기)"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
          className='Register-input'
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>재확인 비밀번호</Form.Label>
          <Form.Control
          className='Register-input'
            type="password"
            name="confirmPassword"
            placeholder="재확인 비밀번호"
            onChange={handleChange}
            required
            isInvalid={passwordError}
          />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Button className='Register-btn' variant="danger" type="submit">
          회원가입
        </Button>
        <div className='goHome'>
              <Link to='/'>Home</Link>
            </div>
      </Form>
      
    </Container>
  )
}

export default Register