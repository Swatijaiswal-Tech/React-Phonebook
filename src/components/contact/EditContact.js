import React , {useState , useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {addContactList , getContact, editContact} from '../../store/actions/contactAction';
import {useHistory, useParams} from 'react-router-dom';

const EditContact = () => {
    let {id} = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
      
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
     
   const contact = useSelector(state => state.contacts.contact)
    useEffect(() => {
        if(contact !== null) {
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
        }
        dispatch(getContact(id));
    },[contact])
    
    const onUpdateContact =  (e) => {
        e.preventDefault();
        const updateContact = Object.assign(contact, {name: name, phone: phone , email: email})
        dispatch(editContact(updateContact));
        history.push("/");
    } 
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Edit Contact 
            </div>
            <div className="card-body"> 
            <form onSubmit= {e => onUpdateContact(e)}> 
                <div className="form-group"> 
                <input type="text" className="form-control" placeholder="enter phone number" value={phone}
                onChange= {(e) => setPhone(e.target.value)}/>
                </div>
                <div className="form-group"> 
                <input type="text" className="form-control" placeholder="enter name" value={name}
                onChange = {(e)=> setName(e.target.value)}/>
                </div>
                <div className="form-group"> 
                <input type="email" className="form-control" placeholder="email" value={email}
                onChange = {(e)=> setEmail(e.target.value)}/>
                </div>
                <button className="btn btn-primary" type="submit"> Edit Contact</button>
            </form>
            </div>
         </div>   
    )
}

export default EditContact;