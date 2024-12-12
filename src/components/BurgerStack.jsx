const BurgerStack = (props) => {
    return (
    <ul>
    {props.map((stack, index) => {
      return <li key={index}>{stack}</li>;
    })}
  </ul>
    );
  };
  
  export default BurgerStack;