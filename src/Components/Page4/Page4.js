import './Page4.css'

function Page4() {
    return (
        <div className="page4">
            <div className="p4img">
                <div>
                    <p>Your dream home is just a click away</p>
                    <button>Get Started</button>
                </div>
            </div>
            <div className="p4customer">
                <h1>Listen to what our Customers have to say</h1>
                <div className="customer">
                    <div className="customer-inner">
                        <img src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="customer" />
                     <div className="customer-content">
                       The right choice to get your home interior done <br/><br/><br/>
                         <b>Annette</b> 
                     </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Page4;
