import './Row.css';

const Row = ({ product }) => {
  return (
    <tr className='row'>
        <td>{product.created_at}</td>
        <td>{`#${product.id}`}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
    </tr>
  )
}

export default Row;