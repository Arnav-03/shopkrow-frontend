import React from 'react'
import {  useNavigate } from 'react-router-dom'

function SubCategoriesLIst({major_category,category_title,category_title_link}) {
    const navigate = useNavigate();
    category_title = category_title.toLowerCase();
    const url=`/${major_category}/${category_title}`
  return (
    <div onClick={()=>{navigate(url)}} className='hover:bg-black hover:text-white cursor-pointer flex h-10 capitalize border-black border-2 px-2  m-2 rounded-2xl w-fit items-center justify-center sriracha text-lg'>
      {category_title}
    </div>
  )
}

export default SubCategoriesLIst
