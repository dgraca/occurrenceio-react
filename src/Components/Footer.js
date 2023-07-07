import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // footer by MerakiUI
            // *adpated to our needs
            <div className="h-6 sm:h-full">
                <footer class="bg-white dark:bg-gray-900">
                    <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                
                        <p class="text-sm text-gray-600 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

                        <div className="flex flex-col sm:flex-row items-center justify-between w-full px-8">
                            <div className="mt-4 flex flex-col sm:flex-row items-center justify-end text-center gap-8 w-full">
                                <p><a href="https://reactjs.org" target="_blank" className="max-w-md mx-auto mt-2 text-gray-400 hover:text-gray-200">React</a></p>
                                <p><a href="https://reactrouter.com/" target="_blank" className="max-w-md mx-auto mt-2 text-gray-400 hover:text-gray-200">React router</a></p>
                                <p><a href="https://tailwindcss.com/" target="_blank" className="max-w-md mx-auto mt-2 text-gray-400 hover:text-gray-200">TailwindCSS</a></p>
                                <p><a href="https://merakiui.com/" target="_blank" className="max-w-md mx-auto mt-2 text-gray-400 hover:text-gray-200">MerakiUI</a></p>
                                <p><a href="https://sweetalert2.github.io/" target="_blank" className="max-w-md mx-auto mt-2 text-gray-400 hover:text-gray-200">Sweetalert2</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Navbar;