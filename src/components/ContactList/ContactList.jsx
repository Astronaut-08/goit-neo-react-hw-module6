import style from './ContactList.module.css'
import Contact from '../Contact/Contact'

const ContactList = ({contacts, onDelete}) => {
    return (
        <div className={style['phonebook-container']}>
            <ul className={style['phonebook-list']}>
                {contacts.map((contacts) => {
                    return (
                        <Contact 
                        key={contacts.id} 
                        id={contacts.id} 
                        name={contacts.name} 
                        number={contacts.number}
                        onDelete={onDelete}/>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default ContactList