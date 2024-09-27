
import handleTimeSpentChange from "./Form"
import formData from "./Form"

export default function Checkboxes({ timeSpent, handleTimeSpentChange}){

      
    return (
        <ul>
            <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    
                    onChange={handleTimeSpentChange}
                    //checked//={timeSpent==="swimming"}
                />Swimming</label>
            </li>
            <li>
                <label
                ><input name="spend-time" type="checkbox" value="bathing" 
                
                onChange={handleTimeSpentChange}
                //checked//={timeSpent==="bathing"}
                />Bathing</label>
            </li>
            <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    
                    onChange={handleTimeSpentChange}
                    //checked//={timeSpent==="chatting"}
                />Chatting</label>
            </li>
            <li>
                <label
                ><input name="spend-time" type="checkbox" value="noTime" 
                
                onChange={handleTimeSpentChange}
                //checked//={timeSpent==="noTime"}
                />I dont like to
                spend time with it</label>
            </li>
        </ul>
    )
}