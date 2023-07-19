import React, {useState} from 'react';
import {BsImage, BsImages} from "react-icons/bs";

const AddProduct = () => {

    const categorys                     = [{
        id: 1, name: 'sport'
    }, {
        id: 2, name: 'Football'
    }, {
        id: 3, name: 'Cricket'
    },]
    const [catShow, setCatShow]         = useState(false)
    const [category, setCategory]       = useState('')
    const [allCategory, setAllCategory] = useState(categorys)
    const [searchValue, setSearchValue] = useState([])

    const categorySearch = (e) => {
        const value = e.target.value
        setSearchValue(value)
        if (value){
            let srcValue=allCategory.filter(c=>c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        }else {
            setCategory(categorys)
        }
    }


    const [state, setState] = useState({
        name: '', description: '', discount: '', price: '', brand: '', stock: ''
    })

    const inputHandle = (e) => {
        e.preventDefault()
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }

    const [images,setImages]=useState([])
    const [imageShow,setImageShow]=useState([])
    const imgHandle=(e)=>{
    const files= e.target.files
        const  length=files.length;
    if (length > 0){
        setImages([...images,...files])
        let imageUrl=[]
        for (let i=0; i<length; i++){
            imageUrl.push({url:URL.createObjectURL(files[i])})
        }
        setImageShow([...imageShow,...imageUrl])
    }
    }

    const changeImage=(img,index)=>{

        if(img){

            console.log('img',img)
            let tempUrl=imageShow
            console.log('temp',tempUrl)
            let tempImages=images
            console.log(tempImages)

            tempImages[index]=img

            tempUrl[index]={url:URL.createObjectURL(img)}
            setImageShow([...tempUrl])
            setImages([...tempImages])


        }
    }

    return (<div className='px-2 md:px-7 py-5 rounded'>


            <div className="bg-gray-800 rounded">
                <div className="container mx-auto p-6">

                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-semibold text-white">Add Product</h1>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Products Add
                        </button>
                    </div>


                    <div className="flex flex-wrap mb-4">

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                            <label className="block text-gray-700 text-sm font-bold mb-2  text-slate-300"
                                   htmlFor="product_name">Product
                                Name</label>
                            <input name='name' onChange={inputHandle} value={state.name}
                                   className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                   id="product_name" type="text" placeholder="Enter product name"/>
                        </div>


                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-slate-300"
                                   htmlFor="brand">Brand</label>
                            <input
                                name='brand' onChange={inputHandle} value={state.brand}
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="brand" type="text" placeholder="Enter brand"/>
                        </div>


                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <div className='flex flex-col md:flex-row gap-4 w-full relative'>
                                <div className='flex flex-col w-full'>


                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-slate-300  "
                                           htmlFor="category">Category</label>
                                    <input
                                        readOnly
                                        onClick={() => setCatShow(!catShow)}
                                        value={category}

                                        name='stock'
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="category" type="text" placeholder="--select category--"/>
                                </div>
                                <div
                                    className={`absolute top-[101%] bg-slate-500 w-full transition-all rounded ${catShow ? 'scale-100' : 'scale-0'}`}>
                                    <div className='w-full px-4 py-2 fixed'>
                                        <input type="text"
                                               placeholder='search'
                                               onChange={categorySearch}
                                               value={searchValue}
                                               className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                                    </div>
                                    <div className="pt-14">

                                    </div>
                                    <div
                                        className='flex justify-start items-start flex-col h-[200px] overflow-x-scroll'>
                                        {allCategory.map((c, i) => <span
                                            key={i}
                                            className='px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full
                                            cursor-pointer'
                                            onClick={() => {
                                                setCatShow(false)
                                                setCategory(c.name)
                                                setSearchValue('')
                                                setAllCategory(categorys)
                                            }}>{c.name}</span>)}
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-slate-300"
                                   htmlFor="stock">Stock</label>
                            <input
                                onChange={inputHandle} value={state.stock}
                                name='stock'
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="stock" type="number" placeholder="Enter stock"/>
                        </div>


                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-slate-300"
                                   htmlFor="price">Price</label>
                            <input
                                onChange={inputHandle} value={state.price}
                                name='price'
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price" type="number" placeholder="Enter price"/>
                        </div>


                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-slate-300"
                                   htmlFor="discount">Discount</label>
                            <input
                                onChange={inputHandle} value={state.discount}
                                name='discount'
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="discount" type="number" placeholder="Enter discount"/>
                        </div>


                        <div className="w-full px-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-slate-300"
                                   htmlFor="description">Description</label>
                            <textarea
                                onChange={inputHandle} value={state.description}
                                name='description'
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description" placeholder="Enter description"/>
                        </div>

                        <div className='grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-3 mb-4 text-white w-full'>
                            {
                                imageShow.map((image,i)=><div className='h-[180px] relative' key={i}>
                                    <label htmlFor={i}>
                                        <img className='h-full w-full rounded' src={image.url} alt=""/>
                                    </label>
                                    <input onChange={(e)=>changeImage(e.target.files[0],i)} type="file" id={i} className='hidden'/>
                                </div>)
                            }
                            <label htmlFor="image" className='flex items-center justify-center flex-col h-[144px] cursor-pointer border border-dashed hover:border-indigo-400 w-full text-white'>
                                <span><BsImages/></span>
                                <span>select image</span>
                            </label>
                            <input multiple className='hidden' type="file" id='image' onChange={imgHandle}/>
                        </div>
                    </div>


                    <div className="flex justify-end">
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddProduct;