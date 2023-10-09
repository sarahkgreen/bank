function Withdraw(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [withdrawal, setWithdrawal] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [balance, setBalance] = React.useState('100');
  const ctx = React.useContext(UserContext);

  function validate(withdrawal){
      if (parseFloat(withdrawal) <= 0){
          setStatus('Error: Must enter a valid withdrawal amount');
          setTimeout(()=> setStatus(''), 3000);
          setDisabled(true);
          return false;
      };
      if (parseFloat(withdrawal) > parseFloat(balance)){
          setStatus('Error: Withdrawal amount must not exceed account balance');
          setTimeout(()=> setStatus(''), 3000);
          setDisabled(true);
          return false;

      };
      if(isNaN(withdrawal)){
          setStatus('Error: Amount must be a number');
          setTimeout(()=> setStatus(''), 3000);
          setDisabled(true);
          return false;
      }
      return true;
  }

  function handleWithdrawal(){
      if(!validate(withdrawal)) return;
      setBalance(parseFloat(balance) - parseFloat(withdrawal));
      ctx.push('Successful withdrawal, amount: $' + withdrawal);
      setShow(false);
      console.log(withdrawal);
      return;
  }

  function clearForm(){
      setWithdrawal('');
      setShow(true);
      setDisabled(true);
  }

  return (
      <div className="p-3">
      <Card
          bgcolor= "primary"
          header= "Make a Withdrawal"
          status= {status}
          body= {show ? (
              <>
                  Account Balance: ${balance} <br/>
                  Withdrawal Amount:<br/>
                  <input type="text" className="form-control" id="withdraw" placeholder="Enter deposit amount" value={withdrawal} onChange={e => {
                      setDisabled(false);
                      setWithdrawal(e.currentTarget.value);
                      }
                  }/><br/>
                  <button type="submit" className="btn btn-light" onClick={handleWithdrawal} disabled={disabled}>Submit Withdrawal</button>
              </>
          ) : (
              <> 
              <h5>Success!<br/>
              New Balance: ${balance}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
              </>
          )} 
      />
      </div>
  );
}