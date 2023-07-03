import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button} from "reactstrap"

const CatNew = ({createCat}) => {

const navigate = useNavigate()

const [newCat, setNewCat] = useState({
  name: "",
  age: "",
  enjoys: "",
  image: ""
})

const handleChange = (e) => {
  setNewCat({...newCat,[e.target.name]: e.target.value})
}

const handleSubmit = () => {
  createCat(newCat)
  navigate("/catindex")
}
  return (
    <>
    <h2 className='new-cat-page'>Join The Family</h2>
    <div className='cat-form'>
    <Form>
      <FormGroup>
        <Label for="cat-name">Name</Label>
        <Input 
        type="text" 
        name="name" 
        placeholder="What is your cat's name?"
        onChange={handleChange}
        value={newCat.name}
        
        />
      </FormGroup>
      <FormGroup>
        <Label for="cat-age">Age</Label>
        <Input 
        type="number" 
        name="age" 
        placeholder="How old is your cat?"
        onChange={handleChange}
        value={newCat.age}
        />
      </FormGroup>
      <FormGroup>
        <Label for="cat-enjoys">What do you enjoy?</Label>
        <Input 
        type="text" 
        name="enjoys" 
        placeholder="What CATivities is your cat into?"  
        onChange={handleChange}
        value={newCat.enjoys}
        />
      </FormGroup>
      <FormGroup>
        <Label for="cat-image">Picture</Label>
        <Input 
        type="url" 
        name="image" 
        placeholder="Share a picture of your fury friend!" 
        onChange={handleChange}
        value={newCat.image}
        />
      </FormGroup>
      <Button onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </div>
    </>
  )
}

export default CatNew