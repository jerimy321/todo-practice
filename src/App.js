import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 3rem;
  padding: 10px;
`;

const Submit = styled(Title)`
  background-color: khaki;
`;
export default function App() {
  return (
    <div>
      <Title>TODO LIST</Title>
      <Submit>
        <input type="text" placeholder="오늘 할 일을 입력하세요."></input>
        <button>Submit</button>
      </Submit>
    </div>
  );
}
