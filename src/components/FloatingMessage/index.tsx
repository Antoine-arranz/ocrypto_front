import Wrapper from "../Wrapper";

const FloatingMessage = ({ message }: any) => {
  console.log("message", message);
  return (
    <Wrapper
      textAlign='center'
      padding='3em'
      border='1px solid black'
      width='50%'
      margin='auto'
      backgroundColor={message.error ? "red" : "green"}
    >
      {message.message}
    </Wrapper>
  );
};

export default FloatingMessage;
