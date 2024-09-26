import handleColorChange from "./Form"
import formData from "./Form"

export default function Radio_Button(){

    return(
        

        <ul>
            <li>
                <input id="color-one" type="radio" name="color" value="red" 
                checked={formData.colour === "red"}
                onChange={handleColorChange}
                /><label
                htmlFor="color-one"
                >Red</label>
            </li>
            <li>
                <input id="color-two" type="radio" name="color" value="blue" 
                checked={formData.colour === "blue"}
                onChange={handleColorChange}
                /><label
                htmlFor="color-two"
                >Blue</label>
            </li>
            <li>
                <input id="color-three" type="radio" name="color" value="yellow" 
                checked={formData.colour === "yellow"}
                onChange={handleColorChange}
                /><label
                htmlFor="color-three"
                >Yellow</label>
            </li>
            <li>
                <input id="color-four" type="radio" name="color" value="black" 
                checked={formData.colour === "black"}
                onChange={handleColorChange}
                /><label
                htmlFor="color-four"
                >Black</label>
            </li>
        </ul>
        
    );
}