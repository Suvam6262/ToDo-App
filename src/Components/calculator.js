function Calculator() {

    function Calculate() {
      const num1 = document.getElementById("first-num").value
      const num2 = document.getElementById("second-num").value
  
      let res = parseFloat(num1) + parseFloat(num2);
  
      document.getElementById("result").innerText = `Result is: ${res}`;
  
     }
  
     
    return (
      <>
        <h1 className="blue">Addition and Subtraction</h1>
        <div className='input-field'>
          <label htmlFor="first-num"><input type='number' placeholder='Enter 1st number Here' id='first-num'></input></label>
  
          <label htmlFor="second-num"><input type='number' placeholder='Enter 2st number Here' id='second-num'></input></label>
        </div>
        <button type='submit' id='btn' onClick={Calculate} >Calculate</button>
  
        <h2 id='result'>Result will be display here!</h2>
      </>
    )
  
  }

  export default Calculator;