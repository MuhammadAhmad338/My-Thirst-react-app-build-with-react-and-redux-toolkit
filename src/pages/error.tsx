/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid";

const Error = () => {

    const navigate = useNavigate();
    const error: any = useRouteError();

    return (
        <div className="error">
            <h1>Uh oh! We've got a problem.</h1>
            <p>{error.message || error.statusText}</p>
            <div className="">
                <button className="btn btn--dark" onClick={() => navigate(-1)}>
                    <ArrowUturnLeftIcon width={20} />
                    <span>Go Back</span>
                </button>
                <Link to="/" className="btn btn--dark">
                    <HomeIcon width={20} />
                    <span>Go Home</span>
                </Link>
            </div>
        </div>
    );
}

export default Error