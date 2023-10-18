import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/user.png';
import { signOut } from '../../Utils/helper';
import './Account.css';

const Account = () => {

    const navigate = useNavigate();

    const logOut = () => {
        navigate("/");
        signOut();
    }

    return (
        <div className='account-div'>
            <h1 className='account-heading'>Account</h1>
            <div className='account-content'>
                <img src={image1} alt="account-image" width={30} height={30} />
                <div className='account-logout' onClick={() => logOut()}>Log Out</div>
            </div>
        </div>
    );
}

export default Account;