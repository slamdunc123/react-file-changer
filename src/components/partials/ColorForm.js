import React, {useState} from 'react'

// css
import './ColorForm.scss'

const ColorForm = () => {

    const [color, setColor] = useState({
        primaryColor: '',
        secondaryColor: ''
    })

    const { primaryColor , secondaryColor} = color;

    const onChange = (e) => {
        setColor({
            ...color, 
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({primaryColor, secondaryColor})
        setColor({
            primaryColor: '',
            secondaryColor: ''
        })
    }
    return (
        <div>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <label htmlFor="primaryColor">Primary Color</label>
                    <input type="color" 
                    placeholder='Primary Color'
                    name='primaryColor'
                    value={primaryColor}
                    onChange={e => onChange(e)}/>
                </div>
               
                {primaryColor}
            
                <div className='form-group'>
                <label htmlFor="secondaryColor">Secondary Color</label>
                    <input type="color" 
                    placeholder='Secondary Color'
                    name='secondaryColor'
                    value={secondaryColor}
                    onChange={e => onChange(e)}/>
                </div> 
                <div>
                {secondaryColor}
            </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ColorForm
