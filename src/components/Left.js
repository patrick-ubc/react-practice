import Button from "./Button"

const Left = () => {
    return (
        <div className="left">
            <div style={{textAlign: 'center'}}>
                <img src="https://gblobscdn.gitbook.com/spaces%2F-MYW_SJxm5dBB_M2eZzh%2Favatar-1626189322971.png?alt=media" 
                    height="20%" width="20%"
                    style={{margin:' 10px auto 0px auto'}}/>
                <h4 style={{marginTop:"0px"}}>Entropyfi</h4>
            </div>
            
            <div style={{margin:'70px 0 0 20%'}}>
                <Button 
                    text="Prediction" 
                    backgroundColor='#1c3a3a' 
                    textColor='white'
                    fontSize='20px'
                    buttonWidth='80%'
                    textAlign='left'
                />
                <Button 
                    text="Sponsorship" 
                    backgroundColor='#1c3a3a' 
                    textColor='white'
                    fontSize='20px'
                    buttonWidth='80%'
                    textAlign='left'
                />
                <Button 
                    text="Claim" 
                    backgroundColor='#1c3a3a' 
                    textColor='white'
                    fontSize='20px'
                    buttonWidth='80%'
                    textAlign='left'
                />
                <Button 
                    text="Vote" 
                    backgroundColor='#1c3a3a' 
                    textColor='white'
                    fontSize='20px'
                    buttonWidth='80%'
                    textAlign='left'
                />
            </div>
        </div>
    )
}

export default Left
