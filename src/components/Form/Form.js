import { useState } from 'react'
import { connect } from 'react-redux'
import { addProduct, getProducts } from '../../common/actions/productActions'
import './Form.css'

const mapDispatchToProps = (dispatch) => {
    return {
        addAProduct: (productData) => dispatch(addProduct(productData)),
        refreshProducts: () => dispatch(getProducts())
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.addNewProduct.product
    }
}

const Form = ({ addAProduct, product, refreshProducts, onAddNewProduct }) => {

  const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }


    const onFormSubmit = (e) => {
        e.preventDefault()
        const productDetails = { name, description }
        console.log(productDetails)
        if(!name || !description) {
            console.log("You can't leave any field empty")
        } else {
            addAProduct(productDetails)

            if (product) {
                setName('')
                setDescription('')

                onAddNewProduct()
                
                setTimeout(() => {
                    refreshProducts()
                }, 5000);
            }
        }

    }

  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
        <p className='form-title'>ADD PRODUCT</p>
        <div className='form-wrapper'>
            <div className='form-item'>
                <input onChange={onNameChange} className="" type="text" name="name" placeholder='Product name' value={name}/>
            </div>
            <div className="form-item">
                <textarea onChange={onDescriptionChange} name="description" placeholder='Product description' value={description}></textarea>
            </div>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);