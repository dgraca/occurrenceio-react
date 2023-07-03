import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="flex flex-row items-center justify-between flex-wrap sm:flex-nowrap bg-gray-800 p-8 text-gray-100">
                <Link to="/" className="font-bold tracking-wider text-2xl">Occurrences.io</Link>

                <div className="w-full sm:mt-0 mt-4 flex flex-col sm:flex-row justify-end mx-auto text-gray-600 dark:text-gray-300 gap-2">
                    <Link to="/occurrences">Ocorrências</Link>
                    <Link to="/albums">Estados</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;