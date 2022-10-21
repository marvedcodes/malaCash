'use strict';

//APP

// Contains movement dates, currency and locale

const account1 = {
  owner: 'Juan Dela Cruz',
  movements: [2000, 4500, -400, 8000, -650, -130, 65000, -5000],
  interestRate: 1.7, // %
  pin: 1111,
  movementsDates: [
    '2022-01-18T21:31:17.178Z',
    '2022-04-23T07:42:02.383Z',
    '2022-06-28T09:15:04.904Z',
    '2022-09-01T10:17:24.185Z',
    '2022-10-17T14:11:59.604Z',
    '2022-10-19T17:01:17.194Z',
    '2022-10-19T21:36:17.929Z',
    '2022-10-20T10:51:36.790Z',
  ],
  currency: 'PHP',
  locale: 'en-PH',
};

const account2 = {
  owner: 'Marvin Pacis',
  movements: [20000, 4500, -400, 3000, -650, -130, 70, 15000],
  interestRate: 1.2, // %
  pin: 2222,
  movementsDates: [
    '2022-02-01T13:15:33.035Z',
    '2022-06-30T09:48:16.867Z',
    '2022-08-25T06:04:23.907Z',
    '2022-09-25T14:18:46.235Z',
    '2022-10-16T16:33:06.386Z',
    '2022-10-18T14:43:26.374Z',
    '2022-10-19T01:49:59.371Z',
    '2022-10-20T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Miguel Joseph Alonzo',
  movements: [50000, 34000, -1500, -790, -3210, -1000, 85000, -30],
  interestRate: 1.5,
  pin: 3333,
  movementsDates: [
    '2021-11-18T13:31:17.178Z',
    '2021-12-23T12:52:32.383Z',
    '2022-01-28T16:35:44.904Z',
    '2022-04-01T12:19:24.185Z',
    '2022-10-16T12:21:59.604Z',
    '2022-10-18T17:55:17.194Z',
    '2022-10-19T03:36:17.929Z',
    '2022-10-20T11:51:36.790Z',
  ],
  currency: 'PHP',
  locale: 'en-PH',
};

const account4 = {
  owner: 'Joanna Mae Shawyer',
  movements: [20000, -200, 3400, -300, -200, 5000, 40000, -460],
  interestRate: 0.7,
  pin: 4444,
  movementsDates: [
    '2021-12-18T11:31:27.178Z',
    '2022-07-23T17:22:12.383Z',
    '2022-08-28T19:35:14.904Z',
    '2022-09-01T18:57:54.185Z',
    '2022-10-16T15:21:49.604Z',
    '2022-10-18T16:31:37.194Z',
    '2022-10-19T21:16:27.929Z',
    '2022-10-20T11:11:16.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account5 = {
  owner: 'Avelyn Pacis',
  movements: [43000, 10200, 7000, 54000, 9500, -15000, 20000, -15000],
  interestRate: 1,
  pin: 5555,
  movementsDates: [
    '2022-07-18T21:31:17.178Z',
    '2022-07-23T07:42:02.383Z',
    '2022-07-28T09:15:04.904Z',
    '2022-08-01T10:17:24.185Z',
    '2022-10-17T14:11:59.604Z',
    '2022-10-18T17:01:17.194Z',
    '2022-10-19T13:36:17.929Z',
    '2022-10-20T10:11:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account6 = {
  owner: 'Jakob Patrik Refuerzo',
  movements: [20000, 30000, -700, 500, 900, -500, 17000, 25000],
  interestRate: 1.3,
  pin: 6666,
  movementsDates: [
    '2021-12-18T22:31:17.178Z',
    '2022-02-23T07:42:02.383Z',
    '2022-07-28T09:15:04.904Z',
    '2022-08-01T10:17:24.185Z',
    '2022-09-08T14:11:59.604Z',
    '2022-10-17T17:31:07.194Z',
    '2022-10-18T13:46:27.929Z',
    '2022-10-20T10:31:26.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account7 = {
  owner: 'Matthew Jacob Pinero',
  movements: [20000, 30000, -300, -500, 9000, -6000, -17000, 10000],
  interestRate: 1,
  pin: 7777,
  movementsDates: [
    '2021-11-21T21:21:47.178Z',
    '2021-12-25T07:32:52.383Z',
    '2022-05-29T09:05:24.904Z',
    '2022-06-02T10:07:44.185Z',
    '2022-07-03T14:01:59.604Z',
    '2022-10-16T17:11:47.194Z',
    '2022-10-19T23:26:17.929Z',
    '2022-10-20T10:41:26.790Z',
  ],
  currency: 'PHP',
  locale: 'en-PH',
  convertionRate: 0.017,
};
const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
];
const exchangeRate = {
  USD: 0.017,
  PHP: 59.04,
};

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelLogin = document.querySelector('.login__label');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelBalanceDesc = document.querySelector('.balance__description');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnLogout = document.querySelector('.logout__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

//------------------- PRINT WELCOME --------------------------
const printWelcome = function (name) {
  const now = new Date();
  const greetings = new Map([
    [[3, 4, 5, 6, 7, 8, 9], 'Good Morning'],
    [[10, 11, 12, 13], 'Good Day'],
    [[14, 15, 16, 17], 'Good Afternoon'],
    [[18, 19, 20, 21], 'Good Evening'],
    [[22, 23, 0, 1, 2], 'Good Night'],
  ]);

  const arr = [...greetings.keys()].find(key => key.includes(now.getHours()));
  const greet = greetings.get(arr);
  labelWelcome.textContent = `${greet}, ${name}!`;
};

// ------------------------- FORMAT DATE ----------------------------
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${month}/${day}/${year}`;
  // INTL API date
  return new Intl.DateTimeFormat(locale).format(date);
};

// --------------------- FORMAT NUMBERS ------------------------------
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

//----------- DISPLAY MOVEMENTS -----------

const displayMovements = function (accts, sort = false) {
  //replace the contents of .movements element
  containerMovements.innerHTML = '';
  //sort -> if false we display the movements
  const movs = sort
    ? accts.movements.slice().sort((a, b) => a - b)
    : accts.movements;

  //looping movements array
  movs.forEach(function (mov, i) {
    //type (withdrawal or deposit)
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //date
    const date = new Date(accts.movementsDates[i]);
    const displayDate = formatMovementDate(date, accts.locale);

    //Intl API numbers
    const formattedMov = formatCur(mov, accts.locale, accts.currency);

    // movements html
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    // insert movements html at containerMovements // insertAdjacentHTML(position, text)
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//----------- DISPLAY BALANCE / REDUCE METHOD -----------

const calcDisplayBalance = function (accts) {
  accts.balance = accts.movements.reduce((acc, mov) => acc + mov, 0);

  //balance
  labelBalance.textContent = formatCur(
    accts.balance,
    accts.locale,
    accts.currency
  );
  //account type
  labelBalanceDesc.textContent = `${currentAccount.currency} Account`;
};

//---------  DISPLAY SUMMARY / CHAINING METHODS ----------

const calcDisplaySummary = function (accts) {
  //total income
  const incomes = accts.movements
    .filter(deposit => deposit > 0)
    .reduce((acc, deposit) => acc + deposit, 0);

  //income summary
  labelSumIn.textContent = formatCur(incomes, accts.locale, accts.currency);

  //total withdrawals
  const out = accts.movements
    .filter(withdrawals => withdrawals < 0)
    .reduce((acc, withdrawals) => acc + withdrawals, 0);

  //withdrawals summary
  labelSumOut.textContent = formatCur(
    Math.abs(out),
    accts.locale,
    accts.currency
  );

  //interest
  const interest = accts.movements
    .filter(deposit => deposit > 0)
    .map(deposit => (deposit * accts.interestRate) / 100)
    .filter((interest, i, arr) => {
      // console.log(arr);
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest);

  //interest summary
  labelSumInterest.textContent = formatCur(
    interest,
    accts.locale,
    accts.currency
  );
};

//----------- CREATING USERNAMES/  MAP METHOD -----------

const createUsernames = function (accts) {
  accts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ') //string becomes an array
      .map(name => name[0])
      .join(''); //array becomes a string
  });
};
// console.log(createUsernames(accounts)); //undefined
createUsernames(accounts);

//------------------------ UPDATE UI --------------------

const updateUI = function (accts) {
  //Display movements
  displayMovements(accts);
  //Display Balance
  calcDisplayBalance(accts);
  // Display summary
  calcDisplaySummary(accts);
};

// -------------------------LOGOUT TIMER -------------------

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds, stop timer and logout user
    if (time === 0) {
      clearInterval(timer);

      //home message
      labelWelcome.textContent = 'Welcome to malaCash';

      //display ui
      containerApp.style.opacity = 0;

      //show login
      labelLogin.style.opacity =
        btnLogin.style.opacity =
        inputLoginPin.style.opacity =
        inputLoginUsername.style.opacity =
          100;
    }
    time--;
  };
  //decrease 1 second

  // set the time to 5 minutes
  let time = 120;
  //call it immediately to avoid having interval seconds at the start
  tick();
  //  call the timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};
//------------------------- LOGOUT BUTTON ---------------------

btnLogout.addEventListener('click', function () {
  //home message
  labelWelcome.textContent = 'Welcome to malaCash';

  //display ui
  containerApp.style.opacity = 0;

  //show login
  labelLogin.style.opacity =
    btnLogin.style.opacity =
    inputLoginPin.style.opacity =
    inputLoginUsername.style.opacity =
      100;
});

// ---- GLOBAL VARIABLE FOR CURRENT ACCOUNT LOGGED IN -----

let currentAccount, timer;

//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//------------------ lOGIN EVENT HANDLER -----------------

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  //find method -> usernames
  currentAccount = accounts.find(
    accts => accts.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === +inputLoginPin.value) {
    // //change message to first name
    // labelWelcome.textContent = `Welcome Back, ${
    //   currentAccount.owner.split(' ')[0]
    // }`;
    printWelcome(`${currentAccount.owner.split(' ')[0]}`);

    //display ui
    containerApp.style.opacity = 100;

    //create current date and time
    // const now = new Date();
    // const options = {
    //   hour: 'numeric',
    //   minute: 'numeric',
    //   day: 'numeric',
    //   month: 'numeric',
    //   year: 'numeric',
    //   // weekday: 'long',
    // };
    // // const locale = navigator.language;
    // // console.log(locale);
    // labelDate.textContent = new Intl.DateTimeFormat(
    //   currentAccount.locale,
    //   options
    // ).format(now);

    //LIVE CLOCK
    const liveclock = () =>
      (labelDate.textContent = Intl.DateTimeFormat(currentAccount.locale, {
        timeStyle: 'medium',
        dateStyle: 'full',
      }).format(new Date()));
    liveclock(); //call it immediately to start
    setInterval(liveclock, 1000);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = now.getHours();
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${month}/${day}/${year}, ${hour}:${min}`;

    //clear login input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //clear previous timer and call current timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    //call update UI
    updateUI(currentAccount);

    //remove login
    labelLogin.style.opacity =
      btnLogin.style.opacity =
      inputLoginPin.style.opacity =
      inputLoginUsername.style.opacity =
        0;

    //wrong credentials
  } else {
    alert('Wrong username or password.');
  }
});

//--------------------- TRANSFER MONEY -----------------

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  //amount
  const amount = +inputTransferAmount.value;
  //receiver
  const receiverAcc = accounts.find(
    accts => accts.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    const exchangeCurrency = amount * exchangeRate[receiverAcc.currency];
    //same currency
    if (currentAccount.currency === receiverAcc.currency) {
      console.log(exchangeCurrency);
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      //different currency
    } else {
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(exchangeCurrency);
    }
    //add transfer dates
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //update ui
    updateUI(currentAccount);
  } else {
    alert('Please check your balance or recipient.');
  }
  //clear transfer input fields
  inputTransferAmount.value = inputTransferTo.value = '';

  //reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

//------------------- REQUESTING LOAN ------------------

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  //loan amount should be whole number
  const amount = Math.floor(inputLoanAmount.value);
  // if there's a deposit of atleast 10% of the requested amount
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //setTimeout Timer
    setTimeout(function () {
      //add movement
      currentAccount.movements.push(amount);

      //add loan dates
      currentAccount.movementsDates.push(new Date().toISOString());

      //update UI
      updateUI(currentAccount);
    }, 2500);
  } else {
    alert(
      'There should be a deposit of atleast 10% of the requested loan amount.'
    );
  }

  //clear loan input field
  inputLoanAmount.value = '';

  //reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

//----------------- DELETING ACCOUNT -------------------

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  //current account === close user and pass
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      accts => accts.username === currentAccount.username
    );
    console.log(index);
    //delete current account
    accounts.splice(index, 1);
    //logout / hide ui
    containerApp.style.opacity = 0;
    //change message
    labelWelcome.textContent = 'Welcome to malaCash';
    //show login
    labelLogin.style.opacity =
      btnLogin.style.opacity =
      inputLoginPin.style.opacity =
      inputLoginUsername.style.opacity =
        100;
  } else {
    alert('Wrong username or password.');
  }

  //clear close input field
  inputCloseUsername.value = inputClosePin.value = '';
});

//------------------ STATE VARIABLE -------------------
let sorted = false;

//---------------------- SORTING --------------------
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  //toggle state variable
  sorted = !sorted;
});

//---------------------------------------------------------
