import './Form.css'

const Form = ({lists}) =>{
    return(
        <div>
            {
                lists.map(list => (
                    <div className='row'>
                        <label>{list.description}</label>
                        <input type={list.type} placeholder={list.placeholder} value={list.value} onChange={event => list.setValue(event.target.value)} />
                    </div>                
            ))}
        </div>
    );
}

export default Form