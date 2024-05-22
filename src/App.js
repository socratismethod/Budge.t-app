import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import AddExpenseForm from './Components/AddExpenseForm';
import { AppContext } from './Context/AppContext';

function App() {
  return (
    <AppContext>
    <div className="Container">
      <h1 className='mt-3'> My Budget Planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget/>
          </div>
          <div className='col-sm'>
            <Remaining/>
        </div>
        <div className='col-sm'>
          <ExpenseTotal/>

        </div>
      </div>

      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList/>
        </div>
      </div>

      <h3 mt-3>Add Expense</h3>
      <div className='mt-3'>
        <div className='col-sm'>
          <AddExpenseForm/>

        </div>

      </div>
    </div>
    </AppContext>

  );

}


export default App;
