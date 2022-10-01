//--------Login Button Condition Apply

var loginBtn = document.getElementById('login');
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
            loginArea.style.display = 'none';
    const transactionArea = document.getElementById("transaction-area");
            transactionArea.style.display = "block";       
})

//--------Deposit Button Condition Apply
const depositBtn = document.getElementById('addDeposit');
    depositBtn.addEventListener('click', function(){

        //------Diposit Data Collect
            const collectDepositAmount = document.getElementById('depositAmount').value;
            const depositNumber = parseFloat(collectDepositAmount);
        
        //------Input Data Validetion (Not Minus Data Input)
            if(depositNumber < 0){
                alert('This is not Valid')
            }
            else{
        //------Diposit Balance Addition
                const currentDepositAmount = document.getElementById('currentDeposit').innerText;
                const currentDepositNumber = parseFloat(currentDepositAmount);
                const totalDeposit = depositNumber + currentDepositNumber;
                document.getElementById('currentDeposit').innerText = totalDeposit;

        //------Diposit Amount add in Balance Section
                const currentBalance = document.getElementById('currentBalance').innerText;
                const currentBalanceNumber = parseFloat(currentBalance);
                const totalBalance = depositNumber + currentBalanceNumber;
                document.getElementById('currentBalance').innerText = totalBalance;

                document.getElementById('depositAmount').value = "";  
            }
    })           

    const withdrawBtn = document.getElementById('addwithdraw');
    withdrawBtn.addEventListener('click', function(){
       
        //------Withdraw Data Collect
            const withdrawAmount = document.getElementById('withdrawAmount').value;
            const withdrawNumber = parseFloat(withdrawAmount);
        
        //------Withdraw Balance Addition
            const currentWithdrawAmount = document.getElementById('currentwithdraw').innerText;
            const currentWithdrawNumber = parseFloat(currentWithdrawAmount);
            const totalWithdraw = withdrawNumber + currentWithdrawNumber;
            document.getElementById('currentwithdraw').innerText = totalWithdraw;

        //------Withdraw Amount add in Balance Section
            const currentBalance = document.getElementById('currentBalance').innerText;
            const currentBalanceNumber = parseFloat(currentBalance);
            const totalBalance = currentBalanceNumber - withdrawNumber;
            document.getElementById('currentBalance').innerText = totalBalance;

            document.getElementById('withdrawAmount').value = "";
    })