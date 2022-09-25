import Table from '../Table/Table';
import './TableDisplay.css';

const TableDisplay = ({ products }) => {
  return (
    <div className='table-display'>
      <div className='table-header'>
        <div className='table-header-left'>
          <div className='table-header-bar'></div>
          <p className='table-title-text'>Products</p>
        </div>
        <div className='table-header-right' >
            <div className='table-filter' style={{width:'135px'}}>
              <select disabled name="filter" id="filter">
                <option value="All Products">All Products</option>
                <option value="Today">Today</option>
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
              </select>
            </div>
        </div>
      </div>
      <Table products={products}/>
    </div>
  )
}

export default TableDisplay;