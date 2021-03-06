import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';


export default function SellerForm(props) {

  const cancelButton = useRef(null);

  //  const [productName, setProductName] = useState('');
  //  const [productPrice, setProductPrice] = useState('');
  //  const [productAbout, setProductAbout] = useState('');


  const [product, setProduct] = useState({
    company_website: '',
    price: '',
    about: '',
    file_upload: '',

  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setProduct({ ...product, [name]: value });

  };


  //  const[formData, setFormData] = useReducer(formReducer, {});
  //  const [submitting, setSubmitting] = useState(false);

  // Creating a submit variable indicating that the item is listed
  //  const successfulSubmit = event => {
  //      event.preventDefault();
  //      setSubmitting(true);

  //      setTimeout(() => {
  //          setSubmitting(false);
  //          setFormData({
  //              reset: true
  //          })
  //      }, 3000)
  //  }

  // saving form data to database
  function onClickSave() {
    const requestData = {
      company_website: product.company_website,
      price: product.price,
      about: product.about,
      file_upload: product.file_upload,
    };

    fetch('/save_product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  // Displaying form data on page
  //  const handleChange = event => {
  //      setFormData({
  //          name: event.target.name,
  //          value: event.target.value,
  //      });
  //  }

  return (props.trigger) ? (
    <>

      <Transition.Root show={props.trigger} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButton} onClose={() => props.setTrigger(false)}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="md:grid md:grid-cols-3 md:gap-10">
                  <div className="mt-5 md:mt-0 md:col-span-10">

                    {/* Temporary Debugging Item Mapping */}

                    {/* {submitting &&
                   <div>
                       You are listing the following:
                       <ul>
                           {Object.entries(formData).map(([name, value]) => (
                               <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                           ))}
                       </ul>
                  
                   </div>
                   } */}


                    <form onSubmit={onClickSave}>
                      <fieldset>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-3 gap-6">
                              <div className="col-span-3 md:col-span-2">

                                <label htmlFor="company_website" className="block text-md font-medium text-gray-700">
                                  Item name
                                </label>

                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <input
                                    type="text"
                                    name="company_website"
                                    id="company_website"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    placeholder="Item's name"
                                    //  onChange={(e)=> setProductName(e.target.value)}
                                    onChange={handleInputs}
                                    value={product.company_website}

                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Item Price
                              </label>

                              <div className="mt-1">
                                <input
                                  type="text"
                                  id="price"
                                  name="price"
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                  placeholder="Enter Fixed Price"
                                  //  onChange={(e)=> setProductPrice(e.target.value)}
                                  onChange={handleInputs}
                                  value={product.price}

                                />
                              </div>
                            </div>


                            <div>
                              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                Description
                              </label>

                              <div className="mt-1">
                                <textarea
                                  id="about"
                                  name="about"
                                  rows={3}
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                  placeholder="An item"
                                  defaultValue={''}
                                  //  onChange={(e)=> setProductAbout(e.target.value)}
                                  onChange={handleInputs}
                                  value={product.about}

                                />
                              </div>
                              <p className="mt-2 text-sm text-gray-500">
                                Brief description for your item.
                              </p>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700">Photo of your item</label>
                              <div className="mt-1">
                                <textarea
                                  id="file_upload"
                                  name="file_upload"
                                  rows={3}
                                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                  placeholder="Link"
                                  defaultValue={''}
                                  //  onChange={(e)=> setProductAbout(e.target.value)}
                                  onChange={handleInputs}
                                  value={product.file_upload}

                                />
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => props.setTrigger(false)}
                              ref={cancelButton}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>

  ) : "";
}


