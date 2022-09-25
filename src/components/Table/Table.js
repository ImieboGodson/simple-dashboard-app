import Row from '../Row/Row';
import './Table.css'

const Table = () => {
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
        <Row />
        <Row />
        <Row />
        <Row />
      </tbody>
    </table>
  )
}

export default Table;