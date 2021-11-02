import './Module.css'
function Module(props){
    return(
        <div className={props.value ? 'blog active' : 'blog'} onClick={()=> props.setValue(false)}>
            <div className={props.value ? 'blog_content active': 'blog_content'} onClick={(e)=> e.stopPropagation}>
                {props.children}
            </div>
        </div>
    )
}
export default Module