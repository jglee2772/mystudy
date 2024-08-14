import React from "react";
import Comment from "./Comment";

const comments = [
    {id: 0, name:"둘리", comment:"호잇"},
    {id: 1, name:"짱구", comment:"호호잇"}
];

function Commentlist(props){
    return(
        <div>
            {comments.map(x=>{
                return (
                    <Comment key={x.id} name={x.name} comment={x.comment} />
                )
            })}
        </div>
    )
}
export default Commentlist;