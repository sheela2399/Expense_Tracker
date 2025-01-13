import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Buttons from './components/Buttons'
import BudgetCard from './components/BudgetCard'
import pencil from "./assets/pencil.svg"
import expense from "./assets/expense.svg"
import coinstack from "./assets/coinstack.svg"
import ExpensesGraph from './components/ExpensesGraph'
import ExpenseChart from './components/ExpensesChart'
import ExpensesTable from './components/ExpensesTable'

function App() {
  const [budget, setBudget] = useState(0);
  const [Expense, setExpense] = useState([])

  const handleBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const handleExpenseAmount = (newExpense) => {
    setExpenseAmount((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const totalExpense = Expense.reduce(
    (acc, curr) => acc + (curr.amount || 0),
    0
  );

  return (
    <>
      <div className='Navbar'>
        <Navbar></Navbar>
      </div>
      <div className='Budget-main'>
        <BudgetCard name={"Your Budget"} amount={budget} img={pencil}/>
        <BudgetCard name={"Your Expense"} amount={totalExpense} img={expense}/>
        <BudgetCard name={"Remaining buget"} amount={budget - totalExpense} img={coinstack}/>
      </div >
      <div className='Filter-section'>
        <Buttons handleBudget={handleBudget}></Buttons>
      </div>
      <div className='Graphs-main'>
        <ExpenseChart></ExpenseChart>
        <ExpensesGraph></ExpensesGraph>
      </div>
      <div>
        <ExpensesTable expense={expense}
        ></ExpensesTable>
      </div>
    </>
  )
}

export default App;
