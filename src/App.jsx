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
  const [expense, setExpense] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  

  const handleBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const handleExpenseAmount = (newExpense) => {
    setExpense((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const totalExpense = expense.reduce(
    (acc, curr) => acc + (curr.amount || 0),
    0
  );

  const filteredExpenses = selectedCategory === "All"
  ? expense
  : expense.filter((exp) => exp.category === selectedCategory);

  // console.log("Expenses:", expense);
  // console.log("Filtered Expenses:", filteredExpenses);

  const handleDelete = (index) => {
    setExpense((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
    setIsDeleting(false);
    setDeletingExpenseIndex(null);
  };
  

  // const remainingBudget = budget - totalExpense;

  return (
    <>
      <div className='Navbar'>
        <Navbar/>
      </div>
      <div className='Budget-main'>
        <BudgetCard name={"Your Budget"} amount={budget} img={pencil}/>
        <BudgetCard name={"Your Expense"} amount={totalExpense} img={expense}/>
        <BudgetCard name={"Remaining buget"} amount={budget - totalExpense} img={coinstack}/>
      </div >
      <div className='Filter-section'>
        <Buttons handleBudget={handleBudget} handleExpense={handleExpenseAmount}  setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className='Graphs-main'>
      {/* <ExpensesGraph expenseData={filteredExpenses.length > 0 ? filteredExpenses : null} />
        <ExpenseChart expenseData={filteredExpenses.length > 0 ? filteredExpenses : null} /> */}

        <ExpenseChart expensedata={filteredExpenses}></ExpenseChart>
        <ExpensesGraph expensedata={filteredExpenses}></ExpensesGraph>
      </div>
      <div className="table-container">
        <ExpensesTable expense={filteredExpenses} handleDelete={handleDelete} setExpense={setExpense} 
        />
      </div>
    </>
  )
}

export default App;
