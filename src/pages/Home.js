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
                        <a href="http://www.ipt.pt" className="hover:cursor-pointer hover:text-gray-700"><h2 className="font-semibold tracking-widest text">Instituto Politécnico de Tomar</h2></a>
                        <h3 className="font-bold tracking-tight text-lg">Licenciatura em Engenharia Informática</h3>
                        <h3 className="tracking-normal text">Desenvolvimento Web</h3>
                        <p>2022/2023</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;