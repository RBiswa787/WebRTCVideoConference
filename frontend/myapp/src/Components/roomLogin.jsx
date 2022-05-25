import React,{useState} from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

export default function RoomLogin() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    alert("Success!");
    navigate("/Video", { replace: true });
  };
  return (
    <MainDiv>
      <InputName type="text"
      name={name}
      onChange={(event) => setName(event.target.value)}
      placeholder="Enter Name"></InputName>
      <InputCode type="text"
      name={code}
      onChange={(event) => setCode(event.target.value)}
      placeholder="Enter Room Code"></InputCode>
        <br />
      <SubButton type="submit" onClick={onSubmit}>Enter</SubButton>
    </MainDiv>
  )
}


const MainDiv = styled.div`
display : flex;
flex-direction: column;
width: 25%;
height: 60vh;
border-radius: 30px;
justify-content: center;
align-items: center;
background-color: blue;
margin-top: 7%;
-webkit-box-shadow: -1px 2px 5px 4px rgba(209,207,209,1);
-moz-box-shadow: -1px 2px 5px 4px rgba(209,207,209,1);
box-shadow: -1px 2px 5px 4px rgba(209,207,209,1);
};
`
const InputName = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
`;

const InputCode = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;

`;
const SubButton = styled.div`
display : flex;
width: 25%;
height: 7%;
justify-content: center;
align-items: center;
border-radius: 5%;
background: #FEE2C5
`