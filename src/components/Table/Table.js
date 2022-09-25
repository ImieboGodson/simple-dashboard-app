import Row from '../Row/Row';
import './Table.css'

const Table = ({ products }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(prod => {
            return <Row key={prod.id} product={prod} />
          })
        }
      </tbody>
    </table>
  )
}

export default Table;