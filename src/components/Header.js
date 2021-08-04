import Button from "./Button"

const Header = () => {
    return (
        <div className='header'>
            <Button 
                text="0x6...381" 
                backgroundColor = '#2a3f3f'
                textColor='white'
            />
            <Button 
                text="English" 
                backgroundColor='#0b1d1d' 
                textColor='white'
            />
        </div>
    )
}

export default Header
