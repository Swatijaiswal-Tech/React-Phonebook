import React , {useState , useEffect} from 'react';
import {useSelector ,useDispatch} from 'react-redux';
import Contact_List from './Contact-list';
import {
  selectAllContact ,
  clearSelectedContact,
  deleteAllseleted
  } from '../../store/actions/contactAction';

const Contacts = () => {
     const [selectAll ,setSelectAll] = useState(false);
     const contacts = useSelector(state => state.contacts.contacts);
     const dispatch = useDispatch();
     const selectedContact = useSelector(state => state.contacts.selectedContacts)
    useEffect(() => {
      if(selectAll) {
        dispatch(selectAllContact(contacts.map((contacts) => contacts.id)));
      } else {
        dispatch(clearSelectedContact());
      }
    },[selectAll]) 
    return (
        <div> {
          selectedContact.length > 1  ? (
            <button className= "btn btn-danger mb-3" onClick={() => dispatch(deleteAllseleted())}> DELETE ALL</button>
          ): null}
           <table className="table table-shadow">
  <thead>
    <tr>
      <th scope="col">
          <div className="custom-control custom-checkbox"> 
          <input type="checkbox" 
            value= "selectAll"
           id= "selectAll" 
           className="custom-control custom-checkbox"
           onClick = {()=> setSelectAll(!selectAll)}/>
            <label htmlFor="selectAll" className="custom-control custom-label"/>
          </div>
      </th>
      <th >Name</th>
      <th>Phone</th>
      <th >Email</th>
      <th>Actions</th>
  
    </tr>
  </thead>
  <tbody> 
      {contacts.map(contact => (<Contact_List contact={contact}  key={contact.id} selectAll= {selectAll}/>))}
     
    </tbody>
  </table>
</div>  
)};  

export default Contacts