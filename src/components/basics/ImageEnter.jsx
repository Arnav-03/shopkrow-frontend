import React, { useState } from 'react';
import axios from 'axios';

const ImageEnter = () => {
    const [id, setId] = useState(Date.now().toString());
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [tagline, setTagline] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            id,
            image,
            name,
            category,
            subcategory,
            tagline,
            quantity,
            price
        };
        try {
            const response = await axios.post(`/product`, productData);
            console.log('Product created:', response.data);
            resetForm();
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    const resetForm = () => {
        setId(Date.now().toString());
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
                    
                  
        
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">ID:</label>
                        <input type="text" value={id} readOnly className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
          
            
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Image URL:</label>
                        <input type="text" name="image" onChange={(e)=>{setImage(e.target.value)}}  required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name:</label>
                        <input type="text" name="name"  onChange={(e)=>{setName(e.target.value)}}  required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Category:</label>
                        <input type="text" name="category"  onChange={(e)=>{setCategory(e.target.value)}}  required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Subcategory:</label>
                        <input type="text" name="subcategory"  onChange={(e)=>{setSubcategory(e.target.value)}} required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tagline:</label>
                        <input type="text" name="tagline"  onChange={(e)=>{setTagline(e.target.value)}}  required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Quantity:</label>
                        <input type="number" name="quantity"  onChange={(e)=>{setQuantity(e.target.value)}} required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Price:</label>
                        <input type="number" name="price" onChange={(e)=>{setPrice(e.target.value)}}  required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ImageEnter;
