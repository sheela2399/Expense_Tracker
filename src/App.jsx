import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Buttons from './components/Buttons'
import BudgetCard from './components/BudgetCard'
import pencill from "./assets/pencill.svg"
import expensegraph from "./assets/expensegraph.svg"
import coin from "./assets/coin.svg"
import ExpensesGraph from './components/ExpensesGraph'
import ExpenseChart from './components/ExpensesChart'
import ExpensesTable from './components/ExpensesTable'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const handleBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const handleExpenseAmount = (newExpense) => {
    setExpense((prevExpenses) => [...prevExpenses, { id: uuidv4(), ...newExpense },]);
  };

  const totalExpense = expense.reduce(
    (acc, curr) => acc + (curr.amount || 0),
    0
  );

  const filteredExpenses = expense.filter((exp) => {
    // Match category and search value
    const matchesCategory = selectedCategory === "All" || exp.category === selectedCategory;
    const matchesSearch = exp.name.toLowerCase().includes(searchValue.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDelete = (id) => {
    setExpense((prevExpenses) => prevExpenses.filter((exp) => exp.id !== id));
    toast.error("Budget Deleted")
    // setIsDeleting(false);
    // setDeletingExpenseIndex(null);
  };

  // const remainingBudget = budget - totalExpense;

  return (
    <>
    <ToastContainer/>
      <div className='Navbar'>
        <Navbar />
      </div>
      <div className='Budget-main'>
        <BudgetCard name={"Your Budget"} amount={budget} img={pencill} />
        <BudgetCard name={"Your Expense"} amount={totalExpense} img={expensegraph} />
        <BudgetCard name={"Remaining buget"} amount={budget - totalExpense} img={coin} />
      </div >
      <div className='Filter-section'>
        <Buttons handleBudget={handleBudget}
          handleExpense={handleExpenseAmount}
          setSelectedCategory={setSelectedCategory}
          setSearchValue={setSearchValue}
        />
      </div>

      {/* Conditional Rendering for Charts, Graphs, and Table */}
      {filteredExpenses.length > 0 ? (
        <>
          <div className="graphs-container">
            <div className="graph-item">
              <ExpenseChart expensedata={filteredExpenses} />
            </div>
            <div className="graph-item">
              <ExpensesGraph expensedata={filteredExpenses} />
            </div>
          </div>
          <div className="table-container">
            <ExpensesTable
              expense={filteredExpenses}
              handleDelete={handleDelete}
              setExpense={setExpense}
            />
          </div>
        </>
      ) : (
        <p className="no-expenses-message">No Expenses !!</p>
      )}


      <div className='footer'>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App;
