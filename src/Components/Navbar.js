import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="flex flex-row items-center justify-between flex-wrap sm:flex-nowrap bg-orange-500 p-8 text-gray-800">
                <div className='wfull flex flex-row itens-center justify-between'>
                    <img className='w-8 h-8' src="/assets/icon.png"/>     
                    <Link to="/" className="font-bold tracking-wider text-2xl">Occurrence.io</Link>
                </div>

                <div className="w-full sm:mt-0 mt-4 flex flex-col sm:flex-row justify-end mx-auto text-gray-800 dark:text-gray-800 gap-2">
                    <Link to="/occurrences">Ocorrências</Link>
                    <Link to="/states">Estados</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;