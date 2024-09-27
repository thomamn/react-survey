export default function Radio_Button({ selectedColor, handleColorChange}){

    return(
        

        <ul>
            <li>
                <input id="color-one" type="radio" name="color" value="red" 
                checked={selectedColor === "red"}
                onChange={handleColorChange}
                /><label
                htmlFor="color-one"
                >Red</label>
            </li>
            <li>
                <input id="color-two" type="radio" name="color" value="blue" 
                checked={selectedColor === "blue"}
                onChange={handleColorChange}
                /><label
                htmlFor="color-two"
                >Blue</label>
            </li>
            <li>
                <input id="color-three" type="radio" name="color" value="yellow" 
                checked={selectedColor === "yellow"}
                onChange={handleColorChange}
                /><label
                htmlFor="color-three"
                >Yellow</label>
            </li>
            <li>
                <input id="color-four" type="radio" name="color" value="black" 
                checked={selectedColor === "black"}
                onChange={handleColorChange}
                /><label
                htmlFor="color-four"
                >Black</label>
            </li>
        </ul>
        
    );
}