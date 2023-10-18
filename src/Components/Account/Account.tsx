import { useNavigate } from 'react-router-dom';
import { signOut } from '../../Utils/helper';
import './Account.css';

const Account = () => {

    const navigate = useNavigate();

    const logOut = () => {
        navigate("/");
        signOut();
    }

    return (
        <div className='account'>
            <h1 className='account-heading'>Account</h1>
            <div className='account-content'>
                <div onClick={() => logOut()}>Log Out</div>
            </div>
        </div>
    )
}

export default Account;