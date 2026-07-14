
function Card({ title, children })  {
 
    return(
        <div className="card">
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="card-container">
                {children}
            </div>
        </div>
    )
}

export default Card