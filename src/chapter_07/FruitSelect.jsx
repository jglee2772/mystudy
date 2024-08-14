import React, {useState} from 'react';

const FruitSelect = (props) => {
    const [value, setValue] = useState('grape');
    const handleChange = (e) => {
        console.log(e.target.options[e.target.selectedIndex].text);
        console.log(value);
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        alert('선택한 과일 : ' + value);
        e.preventDefault();
    }
    return (
        <form onSubmit = {handleSubmit}>
            <label>
                과일을 선택하세요 :&nbsp;
                <select value={value} size="4" onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default FruitSelect;