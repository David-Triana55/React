import './TodoList.css'

function TodoList(props){
    return (
        <section className='TodoList-container'>
            {props.error &&  props.onError()}
            {props.loading &&  props.onLoading()}
            {props.error &&  props.onError()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}

            {props.searchedTodos.map(props.render)}
            <ul>

            </ul>

        </section>
    )
}

export {TodoList}  