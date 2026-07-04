import style from './SearchBox.module.css'
import {Formik, Form, Field} from 'formik'


const SearchBox = ({onSearch}) => {
    return (
        <div className={style['search-container']}>
            <label htmlFor='query' className={style['search-label']}>
                Find contacts by name
            </label>
            <Formik initialValues={{query: ''}} unSubmit={() => {}}>
                {({handleChange}) => (
                    <Form className={style['search-box']}>
                        <Field 
                        type='text'
                        name='query'
                        className={style['search-input']}
                        onChange={(e) => {
                            handleChange(e);
                            onSearch(e.target.value);
                        }}/>  
                    </Form>
                )}
            </Formik>
        </div>
        
    )
}

export default SearchBox