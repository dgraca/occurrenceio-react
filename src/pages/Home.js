import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/**
 * Component that represents the home page
 */
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    // method to render the component
    render() {
        return (
            // Navbar by MerakiUI
            // *adpated to our needs
            <>
                <Navbar />
                <div className="w-full flex flex-col items-center py-8">
                    <div className="text-center mt-6">
                        <h1 class="text-5xl font-extrabold dark:text-gray-800">Bem-vind@</h1>
                        <a href="http://www.ipt.pt" className="hover:cursor-pointer hover:text-gray-700"><h2 className="font-semibold tracking-widest text">Instituto Politécnico de Tomar</h2></a>
                        <h4 class="text-2xl font-bold dark:text-gray-800">Licenciatura em Engenharia Informática</h4>
                        <h4 class="text-2xl font-bold dark:text-gray-800">Desenvolvimento Web</h4>
                        <h4 class="text-2xl font-bold dark:text-gray-800">2022/2023</h4>
                        <br />
                        <p>Desenvolvido pelos alunos 20945 e 20948, respectivamente, Ana Grácio e Daniel Graça.</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;