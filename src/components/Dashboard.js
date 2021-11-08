import React from 'react'
import Products from './Products/Products'

function Dashboard () {

    return (
        <>
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div>
                    <Products/>
                {/* {products.map((product, id) => (
                    <a key={id} href='/#' className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img
                        src={product.image}
                        alt={product.description}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                    </a>
                ))} */}
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;