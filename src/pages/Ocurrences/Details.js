import React from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useNavigate, useParams } from "react-router-dom";

// this is a work-around to use react hooks in ES6 classes
// Hooks cannot be used inside ES6 classes, and we need them
// because of the react-router-dom way of passing props
// this function returns a component with all it's props plus the params (props)
// passed by the react-router-dom components (Link, Router, etc)
// for more info: https://reactjs.org/docs/higher-order-components.html
const withHooks = (Component) => {
    return props => <Component {...props} navigate={useNavigate()} params={useParams()} />;
}

class OccurrencesDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            occurrence: {},
            currentState: '',
            loading: false
        };
    }

     // when the component is mounted, get the occurrences
     async componentDidMount() {
        const id = this.props.params.id;
        this.getOccurrence(id);
    }

    // method to get the occurrences from the API
    async getOccurrence(id) {
        // set the request options
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const url = '/api/ReportsAPI/' + id;
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                // set the current state of the occurrences
                this.setState({ currentState: this.state.occurrence.listReportState?.slice(-1)[0]?.state});
                // set the current state of the component
                this.setState({ occurrence: data, loading: false });
            })
            .catch(error => {
                console.error('Error fetching occurrences:', error);
            });
    }

    render() {
        const { occurrence, loading } = this.state;

        // if the component is loading, show a loading message
        if (loading) {
            return <p>Loading occurrence...</p>;
        }

        // Get the current server's base URL
        const serverBaseUrl = window.location.origin;

        return (
        <>
            <Navbar />
            <div className="w-full flex flex-col items-center py-8">
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Detalhes da Ocorrência</h2>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Título</label>
                            <input name="title" value={occurrence.title} id="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Descrição</label>
                            <input name="description" value={occurrence.description} id="description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Latitude</label>
                            <input name="latitude" value={occurrence.latitude} id="latitude" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Longitude</label>
                            <input name="longitude" value={occurrence.longitude} id="longitude" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly />
                        </div>
                    </div>
                    <br />
                    <div>
                        <label className="text-gray-700 dark:text-gray-200">Imagens</label>
                        <div>
                            {occurrence.listReportImage?.map(image => (
                                <img 
                                    key={image.id}
                                    src={`${serverBaseUrl}/${image.name}`}
                                    alt="Report Image"
                                    className="w-100 mt-2 h-full rounded-lg mx-auto"
                                />
                            ))}
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

export default withHooks(OccurrencesDetails);