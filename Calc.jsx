// import { useState } from "react";

// function Button() {
//     let[count,setCount]=useState();
//     function handleClick(val){
//         setCount(count + val);
//     }
//     function handleClick(){
//         setCount();
//     }
//     return(
//         <>
//         <button onClick={() => handleClick('+1')}>+1{count}</button>
//         <button onClick={() => handleClick()}>+2{count}</button>
//         <button onClick={() => handleClick()}>+3{count}</button>
//         <button onClick={() => handleClick()}>-1{count}</button>
//         <button onClick={() => handleClick()}>-2{count}</button>
//         <button onClick={() => handleClick()}>-3{count}</button>
//         <button onClick={()=> handleClick()}>clear{count}</button>
//         </>
//     );
// }
// export default Button;
import { useState } from 'react';

function Calc() {
  const [result, setResult] = useState(0);

  const handleButtonClick = (operation) => {
    switch (operation) {
      case '+1':
        setResult(result + 1);
        break;
      case '+2':
        setResult(result + 2);
        break;
      case '+3':
        setResult(result + 3);
        break;
      case '-1':
        setResult(result - 1);
        break;
      case '-2':
        setResult(result - 2);
        break;
      case '-3':
        setResult(result - 3);
        break;
      case 'Clear':
        setResult(0);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h2>Result: {result}</h2>
      <div>
        <button onClick={() => handleButtonClick('+1')}>+1</button>
        <button onClick={() => handleButtonClick('+2')}>+2</button>
        <button onClick={() => handleButtonClick('+3')}>+3</button>
        </div>
        <div>
        <button onClick={() => handleButtonClick('-1')}>-1</button> 
        <button onClick={() => handleButtonClick('-2')}>-2</button>
        <button onClick={() => handleButtonClick('-3')}>-3</button>
        <button onClick={() => handleButtonClick('Clear')}>Clear</button>
      </div>
    </div>
  );
}
export default Calc;