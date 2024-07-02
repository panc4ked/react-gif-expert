import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        //categories.push(newCategory)
        
        setCategories([ newCategory, ...categories]) //usar desestructuracion(...) es mucho mejor que .push
        //setCategories( cat => [...cat, 'Naruto'])
    }

    return (
    <>
    <h1>GifExpertApp</h1>
    
    <AddCategory 
  
    onNewCategory= {(value) => onAddCategory(value)} 
    />
    
        {categories.map(category => 
            (
                <GifGrid key={category} category={category}/>
            )
        )}
        
    
    
    </>
  )
}
