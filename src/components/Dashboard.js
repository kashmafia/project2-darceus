import React, {useState} from 'react'
import Cart from './Cart';

function Dashboard (props) {
    const products = props.item;
    const [showItem, setShowItem] = useState(false)
    
    return (
        <>
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product, id) => (
                        <>
                        <a key={id} href='/#' className="group">
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img
                            src={product.image}
                            alt={product.description}
                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                        <div className="flex">
                        <p className="flex-auto mt-1 text-lg font-medium text-gray-900">${product.price} </p>
                        <button class="w-1/4 flex-auto bg-transparent hover:text-indigo-600 items-center justify-center rounded-md border border-gray-300" type="button" onClick={ () => setShowItem(item => !item)}>Add to bag</button>
                        </div>
                        </a>
                        
                        </>
                ))}
                </div>
            </div>
        </div>
        

        {showItem ? <Cart/>: <> </>}
        </>
    );
}

export default Dashboard;