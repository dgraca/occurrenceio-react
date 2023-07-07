import React from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

class StatesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            states: [],
            loading: true
        };
    }

    // when the component is mounted, get the states
    async componentDidMount() {
        this.getStates();
    }
    
    // method to get the occurrences from the API
    async getStates() {
        // set the request options
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch('/api/ReportStatesAPI', requestOptions)
            .then(response => response.json())
            .then(data => {
                // set the current state of the component
                this.setState({ states: data, loading: false });
            })
            .catch(error => {
                console.error('Error fetching occurrences:', error);
            });
        
    }

    render() {
        // get the states and loading state from the current state
        const { states, loading } = this.state;
        // if the component is loading, show a loading message
        if (loading) {
            return <p>Loading states...</p>;
        }

        return (
        <>
            <Navbar />
            <div className="w-full flex flex-col items-center py-8">
                    <section className="container px-4 mx-auto">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-gray-800">Lista de Estados das Ocorrências</h2>
                        <div className="flex flex-col mt-6">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                            <thead className="bg-gray-50 dark:bg-gray-800">
                                                <tr>
                                                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                        <span>Estado</span>
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                {states.map(state => (
                                                <tr key={state.id}>
                                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                        <div>
                                                            <h2 className="font-medium text-gray-800 dark:text-white ">{state.state}</h2>
                                                        </div>
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
            <br />
            <Footer />
        </> 
        );
    }
}

export default StatesIndex;