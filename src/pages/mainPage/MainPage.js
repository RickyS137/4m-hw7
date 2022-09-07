import React, { useEffect, useState } from "react";

function MainPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Ты нажал на кнопку ${count} раз`
  },[count])

  const increment = () => 
      { setCount(count + 1)}

  const decrement = () => 
      { setCount(count - 1)}
  
  const reset = () => 
      { setCount(0)}

    return (
        <div>
           <h2>{count}</h2>
           <button onClick={increment}>+</button>
           <button onClick={reset}>reset</button>
           <button onClick={decrement}>-</button>
        </div>
    );
}
export default MainPage;