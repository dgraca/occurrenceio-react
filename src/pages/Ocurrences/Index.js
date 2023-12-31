import React from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

class OccurrencesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            occurrences: [],
            loading: true
        };
    }

    // when the component is mounted, get the occurrences
    async componentDidMount() {
        this.getOccurrences();
    }

    // method to get the occurrences from the API
    async getOccurrences() {
        // set the request options
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch('/api/ReportsAPI', requestOptions)
            .then(response => response.json())
            .then(data => {
                // set the current state of the occurrences
                for (const [key, occurrence] of Object.entries(data)) {
                    occurrence.currentState = occurrence.listReportState.slice(-1)[0].state;
                }
                // set the current state of the component
                this.setState({ occurrences: data, loading: false });
            })
            .catch(error => {
                console.error('Error fetching occurrences:', error);
            });
        
    }

    // method to delete an occurrence
    async deleteOccurrence(id) {
        // opens a modal to confirm the deletion
        Swal.fire({
            title: 'Tem a certeza que pretende apagar esta ocorrência?',
            text: "Esta ação é irreversível!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4caf50',
            cancelButtonColor: '#f44336',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            // if the user confirms the deletion
            if (result.isConfirmed) {
                // set the request options
                var requestOptions = {
                    method: 'DELETE',
                    redirect: 'follow'
                };

                // send the request to the API
                fetch('/api/ReportsAPI/' + id, requestOptions)
                    .then(response => {
                        // if the response is ok, show a success message
                        if (response.ok) {
                            Swal.fire({
                                title: 'Apagado!',
                                text: 'A ocorrência foi apagada.',
                                icon: 'success',
                                confirmButtonColor: '#4caf50',
                                confirmButtonText: 'OK'
                            }).then(async (result) => {
                                // if the user clicks the ok button, reload the page
                                if (result.isConfirmed) {
                                    await this.getOccurrences();
                                }
                            });
                        }
                        // if the response is not ok, show an error message
                        else {
                            Swal.fire({
                                title: 'Erro!',
                                text: 'Ocorreu um erro ao apagar a ocorrência.',
                                icon: 'error',
                                confirmButtonColor: '#4caf50',
                                confirmButtonText: 'OK'
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting occurrence:', error);
                    });
            }
        });
    }

    render() {
        // get the occurrences and loading state from the current state
        const { occurrences, loading } = this.state;
        // if the component is loading, show a loading message
        if (loading) {
            return <p>Loading occurrences...</p>;
        }

        return (
            <>
                <Navbar />
                <div className="w-full flex flex-col items-center py-8">
                    <section className="container px-4 mx-auto">
                    <div class="w-full mt-4 flex flex-row items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-800 dark:text-gray-800">Lista de Ocorrências</h2>
                        <Link to="/occurrences/create" className="text-gray-900 whitespace-no-wrap tracking-wider font-bold rounded-md bg-blue-400 hover:bg-blue-500 px-4 py-2">Criar nova ocorrência</Link>
                    </div>
                        <div className="flex flex-col mt-6">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                            <thead className="bg-gray-50 dark:bg-gray-800">
                                                <tr>
                                                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                        <span>Título</span>
                                                    </th>

                                                    <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                        Estado
                                                    </th>

                                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    </th>

                                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    </th>

                                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                {occurrences.map(occurrence => (
                                                <tr key={occurrence.id}>
                                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                        <div>
                                                            <h2 className="font-medium text-gray-800 dark:text-white ">{occurrence.title}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                        <div className="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
                                                            {occurrence.currentState}
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                        <Link to={{ pathname: `/occurrences/${occurrence.id}/details`, id: occurrence.id }} className="text-gray-900 whitespace-no-wrap tracking-wider font-bold rounded-md bg-blue-400 hover:bg-blue-500 px-4 py-2">Detalhes</Link>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div class="flex items-center gap-x-6">
                                                            <Link to={{ pathname: `/occurrences/${occurrence.id}/edit`, id: occurrence.id }} className="text-gray-900 whitespace-no-wrap tracking-wider font-bold rounded-md bg-yellow-400 hover:bg-yellow-500 px-4 py-2">Editar</Link>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap"> 
                                                        <div className="flex items-center gap-x-6">
                                                            <div onClick={() => this.deleteOccurrence(occurrence.id)} className="text-gray-900 whitespace-no-wrap tracking-wider font-bold rounded-md bg-red-400 hover:bg-red-500 px-6 py-2">Apagar</div>
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

export default OccurrencesIndex;