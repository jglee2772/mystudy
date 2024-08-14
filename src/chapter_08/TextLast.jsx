import React, {useState} from 'react';
import TextConvert from './TextConvert';

const TextLast = (props) => {
    const [content, setContent] = useState('');
    const textChange = (x) => {
        setContent(x);
    }

    return (
        <div>
            <TextConvert
                content={content}
                onTextChange={textChange} />
            <TextConvert
                content={content}
                onTextChange={textChange} />
        </div>
    )
}
export default TextLast;