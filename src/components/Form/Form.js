import { useState } from 'react'
import './Form.css'

const Form = () => {

  const [name, setName] = useState()
    const [description, setDescription] = useState()


    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }


    const onFormSubmit = (e) => {
        e.preventDefault()
        const userDetails = { name, description }
        console.log(userDetails)
        // addUser(userDetails)

        setName('')
        setDescription('')

        // if (user) {
        //     setName('')
        //     setEmail('')
        //     setPassword('')
            
        //     setTimeout(() => {
        //         refetchUsers()
        //     }, 5000);
        // }

    }

  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
        <p className='form-title'>ADD PRODUCT</p>
        <div className='form-wrapper'>
            <div className='form-item'>
                <input onChange={onNameChange} className="" type="text" name="name" placeholder='Name' value={name}/>
            </div>
            <div className="form-item">
                <textarea onChange={onDescriptionChange} name="description" placeholder='Product Description' value={description}></textarea>
            </div>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form;