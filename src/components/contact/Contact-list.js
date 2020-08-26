import React from 'react';
import Avatar from 'react-avatar';
import {Link} from 'react-router-dom'; 
import {deleteContact} from '../../store/actions/contactAction';
import {useDispatch} from 'react-redux';
const Contact_List = ({contact, selectAll}) => {
    const dispatch = useDispatch();
    const {name , phone ,username, id} = {...contact}
    return (
        <>
          <tr >
            <td scope="row">
            <div className="custom-control custom-checkbox"> 
                <input type="checkbox" 
                className="custom-control custom-checkbox"
                 checked ={selectAll}/>
                <label className="custom-control custom-label"/>
            </div> 
        </td>    
            <td> <Avatar name={name} size="45" round={true} className="mr-2"/>{name}</td>
            <td>{phone}</td>
            <td>{username}</td>
            <td className="actions"> 
                 <Link to={`/edit/${id}`}> <span className="material-icons mr-2">edit</span> </Link>
            <span className="material-icons" onClick={() => dispatch(deleteContact(id))}>remove_circle </span>
           </td>   
          </tr>
        </>
    )
}

export default Contact_List;