import './Page3.css'
import AcUnitIcon from '@material-ui/icons/AcUnit';


const Page3 = () => {
    return (
        <div className="page3">
            <div className="imgcontent">
                <div>
                   <h1>How Does It Work ?</h1>
                    <ol>
                        <li>Meet the Designer</li>
                        <li>Seal the Deal</li>
                        <li> Place the Order</li>
                        <li>Installation Begins</li>
                        <li>Move in Happily</li>
                    </ol> 
                </div>
            </div>
            <div className="page3-row">
                <h1>Technology that makes our products long lasting</h1>
              
                <ul className="ul1">
                    <div> <AcUnitIcon/> </div>
                    <div>  </div>
                    <div>  </div>
                    
                </ul>
                <ul className="ul2">
                    <div> </div>
                    <div> </div>
                </ul>
            </div>
         
        </div>
        
    )
}

export default Page3;
