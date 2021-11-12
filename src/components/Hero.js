import '../App.css'
import React, {useState} from 'react'
import SellerForm from './SellerForm';


function Main () {
    const [sellForm, setSellForm] = useState(false)
    return (
        <div>
        <main>
            <div className="mt-24 mx-auto max-w-7xl px-4 sm:mt-32 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Darceus's  </span>
                    <span className="block text-indigo-600 xl:inline">headless E-Commerce</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Nowadays, marketplace website often overloaded with thousands of distractions and information that sometime confuse you.
                    Hence, you end up buying something you not really need.Therefore, we create a seamless and straight-forward web application 
                    that has no ads, no distraction, and one click button for your convenience. Enjoy your time!
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                        <button
                        onClick={() => setSellForm(true)}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                        >
                        Start selling
                        </button>
                    </div>
                    </div>
                </div>

                <SellerForm trigger={sellForm} setTrigger={setSellForm}/>
            </div>
        </main>
        </div>
    );
}

export default Main;