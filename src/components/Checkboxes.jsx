
import handleTimeSpentChange from "./Form"
import formData from "./Form"

export default function Checkboxes(){

    
      
      
    return (
        <ul>
            <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    //checked={formData.timeSpent.push("swimming")}
                    //onChange={handleTimeSpentChange}
                />Swimming</label>
            </li>
            <li>
                <label
                ><input name="spend-time" type="checkbox" value="bathing" 
                //checked={formData.rmtimeSpent.push("bathing")}
                //onChange={handleTimeSpentChange}
                />Bathing</label>
            </li>
            <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    //checked={formData.rmtimeSpent.push("chatting")}
                    //onChange={handleTimeSpentChange}
                />Chatting</label>
            </li>
            <li>
                <label
                ><input name="spend-time" type="checkbox" value="noTime" 
                //checked={formData.rmtimeSpent.push("noTime")}
                //onChange={handleTimeSpentChange}
                />I dont like to
                spend time with it</label>
            </li>
        </ul>
    )
}