import React from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

// this is a work-around to use react hooks in ES6 classes
// Hooks cannot be used inside ES6 classes, and we need them
// because of the react-router-dom way of passing props
// this function returns a component with all it's props plus the params (props)
// passed by the react-router-dom components (Link, Router, etc)
// for more info: https://reactjs.org/docs/higher-order-components.html
const withHooks = (Component) => {
    return props => <Component {...props} navigate={useNavigate()} />;
  }

class OccurrencesCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            occurrence: {
                title: "",
                description: "",
                latitude: "",
                longitude: "",
                images: []
            },
            loading: false
        };
    }

    // when the component is mounted, get the occurrences
    async componentDidMount() {
        //
    }

    // handle occurrence field changes
    handleFieldChange = (event) => {
        const { name, value } = event.target;
        const { occurrence } = this.state;
        occurrence[name] = value;
        this.setState({ occurrence: occurrence });
    }

    /**
     * creates a new occurrence via POST request
     * @param {Event} event
     * @param {Object} occurrence represents the occurrence to be created
     * 
     * @returns {void}
     */
    async createOccurrence(event, occurrence) {
        // prevent default form submission
        event.preventDefault();
        
        // set the request options
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        // creates an object of key/value pairs to be sent to an API
        let formData = new FormData();
        
        // loops through the occurrence object and appends the key/value pairs to the formData object
        for (const [key, value] of Object.entries(occurrence)) {
            // jump image files
            if (key === "images") {
                continue;
            }
            formData.append(key, value);
        }

        // formData.append("images", event.target.images.files);
        formData.append("userId", 1);

        // add the form data to the request options
        requestOptions.body = formData;
        
        // send the POST request
        fetch('/api/ReportsAPI', requestOptions)
            .then(res => {
                // response is OK or Created
                if (res.ok) {
                    // redirect to the occurrences index page
                    this.props.navigate("/occurrences");
                }
            })
            .catch(error => {
                console.error('Error creating occurrence:', error);
            });
    }

    render() {
        // get the occurrences and loading state from the current state
        const { occurrence, loading } = this.state;

        return (
            <>
                <Navbar />
                <div className="w-full flex flex-col items-center py-8">
                    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Nova ocorrência</h2>

                        <form onSubmit={e => this.createOccurrence(e, occurrence)}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200">Título</label>
                                    <input name="title" value={occurrence.title} onChange={e => this.handleFieldChange(e)} id="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200">Descrição</label>
                                    <input name="description" value={occurrence.description} onChange={e => this.handleFieldChange(e)} id="description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200">Latitude</label>
                                    <input name="latitude" value={occurrence.latitude} onChange={e => this.handleFieldChange(e)} id="latitude" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200">Longitude</label>
                                    <input name="longitude" value={occurrence.longitude} onChange={e => this.handleFieldChange(e)} id="longitude" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagens</label>
                                    <input name="images" value={occurrence.images} onChange={e => this.handleFieldChange(e)} id="images" type="file" multiple className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                                </div>
                            </div>

                            <div className="flex justify-end mt-6">
                                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Criar</button>
                            </div>
                        </form>
                    </section>
                </div>
                <br />
                <Footer />
            </>

        );
    }
}

export default withHooks(OccurrencesCreate);