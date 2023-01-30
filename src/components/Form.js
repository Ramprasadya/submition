import React, { useState } from 'react'

const Form = () => {

   const [text, setText] = useState("")
   const [content, setContent] = useState("")

   const onChange=(event)=>{
    const text = event.target.value
    setText(text)
   }

   const onDesc=(event)=>{
    const desc = event.target.value
    setContent(desc)
   }

    

 const handleClick=(event)=>{
   
    event.preventDefault()
 }
  return (
    <div className="container">
    <form  >
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" name='title' value={text} onChange={onChange} id="exampleFormControlInput1" placeholder="Enter your Email"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" name='content' onChange={onDesc} id="exampleFormControlTextarea1" value={content} rows="3"></textarea>
</div>
  <button type='submit' onClick={handleClick} className='btn btn-primary'>Submit</button>
  </form>
    </div>
  )
}

export default Form