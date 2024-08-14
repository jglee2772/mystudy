import React,{useState} from 'react';

// class Toggle extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {isToggle: true};
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn? '켜짐' : '꺼짐'}
//             </button>
//         );
//     }
// }
// export default Toggle;

const Toggle = (props) => {
    const [isToggleOn, setIsToggleOn] = useState(true);
    // const handleClick = () => {
    //     setIsToggleOn(a => !a);
    // }
    return (
        <button onClick = {() => setIsToggleOn(a => !a)}>
            {isToggleOn? '켜짐':'꺼짐'}
        </button>
    );
}
export default Toggle;