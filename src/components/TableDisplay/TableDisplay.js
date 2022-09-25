import Table from '../Table/Table';
import './TableDisplay.css';

const TableDisplay = () => {
  return (
    <div className='table-display'>
      <div className='table-header'>
        <div className='table-header-left'>
          <div className='table-header-bar'></div>
          <p className='table-title-text'>Products</p>
        </div>
        <div className='table-header-right' >
            <div className='table-filter' style={{width:'144px'}}>
              <select name="filter" id="filter">
                <option value="All Transactions">All Transactions</option>
                <option value="24 Hours">24 Hours</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
              </select>
            </div>
        </div>
      </div>
      <Table />
    </div>
  )
}

export default TableDisplay;