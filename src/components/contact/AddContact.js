import React , {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addContactList} from '../../store/actions/contactAction';
import {useHistory} from 'react-router-dom';

const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');

    const createContact = (e)  =>{
        e.preventDefault();
        const new_contact = {
            id: Math.random(new Date()),
            name: name,
            phone: phone,
            username: email
        }
        console.log(name, phone, email);
        dispatch(addContactList(new_contact));
        history.push("/");
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add Contact 
            </div>
            <div className="card-body"> 
            <form onSubmit = {(e)=> createContact(e)}> 
                <div className="form-group"> 
                <input type="number" className="form-control" placeholder="enter phone number" value={phone}
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
                <button className="btn btn-primary" type="submit"> Create Contact</button>
            </form>
            </div>
         </div>   
    )
}

export default AddContact;