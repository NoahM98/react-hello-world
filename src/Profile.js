import React from 'react';
import './Profile.css';
const Profile = () => {
    return (
        <div className="profile">
            <h1>Profile</h1>
            <div id='profile-card'>
                <img id="profile-picture" src="https://freesvg.org/img/abstract-user-flat-4.png"></img>
                <div id='profile-segment'>
                    <div id='label'>
                        <p>Name:</p>
                        <p>Email:</p>
                        <p>Address:</p>
                    </div>
                    <div id='label-value'>
                        <p>Noah Mauer</p>
                        <p>noahmauer1998@gmail.com</p>
                        <p>N/A</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
