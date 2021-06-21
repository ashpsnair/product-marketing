import './Page3.css'
import { ReactComponent as P3 } from './../../Images/p3.svg';

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
                <div className="p3"><P3 x="30%" y="30%" width="100%" /></div>
                
            </div>
         
        </div>
        
    )
}

export default Page3;
