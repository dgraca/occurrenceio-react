import React from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

class OccurrencesCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            occurrence: [],
            loading: false
        };
    }

    // when the component is mounted, get the occurrences
    async componentDidMount() {
        //
    }

    // creates a new occurrence via POST
    // from the form data
    async createOccurrence() {
        //
    }

    render() {
        return (
            <>
                <Navbar />
                <div classNameNameName="w-full flex flex-col items-center py-8">
                    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Nova ocorrência</h2>

                        <form>
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="title">Título</label>
                                    <input id="title" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="description">Descrição</label>
                                    <input id="description" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="latitude">Latitude</label>
                                    <input id="latitude" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="longitude">Longitude</label>
                                    <input id="longitude" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="images">Imagens</label>
                                    <input id="images" type="file" multiple class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Criar</button>
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

export default OccurrencesCreate;