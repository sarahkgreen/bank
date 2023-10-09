function Deposit(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [balance, setBalance] = React.useState('100');
  const ctx = React.useContext(UserContext);


  function validate(deposit){
      if (!deposit){
          setStatus('Error: Must enter a deposit amount');
          setTimeout(()=> setStatus(''), 3000);
          setDisabled(true);
          return false;
      };
      if (parseFloat(deposit) <= 0){
          setStatus('Error: Deposit must be more than zero');
          setTimeout(()=> setStatus(''), 3000);
          setDisabled(true);
          return false;

      };
      if(isNaN(deposit)) {
          setStatus('Error: please enter a number');
          setTimeout(()=> setStatus(''), 3000);
          setDisabled(true);
          return false;
      }
      return true;
  }
  
  function handleDeposit(){
      if(!validate(deposit)) return;
      setBalance(parseFloat(balance) + parseFloat(deposit));
      ctx.push('Successful deposit, amount: $' + deposit);
      setShow(false);
      console.log(deposit);
      return;
  }

  function clearForm(){
      setDeposit('');
      setShow(true);
      setDisabled(true);
  }

  return (
      <div className="p-3">
      <Card
          bgcolor= "primary"
          header= "Make a Deposit"
          status= {status}
          body= {show ? (
              <>
                  Account Balance: ${balance} <br/>
                  Deposit Amount:<br/>
                  <input type="text" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => {
                      setDisabled(false);
                      setDeposit(e.currentTarget.value);
                      }
                  }/><br/>
                  <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={disabled}>Submit Deposit</button>
              </>
          ) : (
              <> 
              <h5>Success!<br/>
              New Balance: ${balance}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
              </>
          )} 
      />
      </div>
  );
}