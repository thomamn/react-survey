import Radio_Button from "./Radio_Button";
import Checkboxes from "./Checkboxes";
import { useState } from "react";

function Form() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [color, setColor] = useState("");
    const [review, setReview] = useState("");
    const [answers, setAnswers] = useState([])

    const [formData, setFormData] = useState({
        username: "",
        email:"",
        color: "",
        timeSpent: [],
        review: "",
      }); 

    const handleTimeSpentChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
        ...prev,
        timeSpent: checked
        ? [...prev.timeSpent, value]
        : prev.timeSpent.filter((item) => item !== value),
    }));
    };

    const handleColorChange = (e) => setFormData({ ...formData, color: e.target.value });

    
    

    return (
        <form className="form">
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <Radio_Button selectedColor={formData.color} handleColorChange={handleColorChange}/>
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <Checkboxes timeSpent={formData.timeSpent} handleTimeSpentChange={handleTimeSpentChange}/>
            </div>
            <label
                >What else have you got to say about your rubber duck?<textarea
                name="review"
                cols="30"
                rows="10"
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                ></textarea>
            </label>
            <label
                >Put your name here (if you feel like it):<input
                type="text"
                name="username"
                value="" 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                
            </label>
            <label
                >Leave us your email pretty please??<input
                type="email"
                name="email"
                value="" 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                
            </label>
            <input className="form__submit" type="submit" value="Submit Survey!" onClick={() => setFormData([username, email])}/>
        </form>
      )
}

 export default Form

