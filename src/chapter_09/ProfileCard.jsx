import React from 'react';
import Card from './Card';

const ProfileCard = (props) => {
    return (
        <Card title="Today" backgroundColor="#4ea04e">
            <p>오늘입니다.</p>
            <p>리액트를 사용하고 있습니다.</p>
        </Card>
    )
}
export default ProfileCard;