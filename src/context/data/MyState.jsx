import { useEffect, useState } from "react"
import MyContext from "./MyContext"
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, Timestamp } from "firebase/firestore"
import { fireDb } from "../../firebase/FirebaseConfig"

const MyState = (prop) => {
   const [products, setProducts] = useState({

       title:"",
       price:"",
       imageUrl:"",
       category:"",
       time:Timestamp.now(),
       date:new Date().toLocaleDateString(
        "en-US",
        {
            month:"short",
            day:"2-digit",
            year:"numeric",
        }
       )
    })

    //* Add Product function
    const addProduct = async () => {
    //* Validation    
        if ( products.title === "" || products.price === "" || products.imageUrl === "" || products.category === "") {
            return alert("All Fields are required")
        }
        // * Product Refrence
        const productRef = collection(fireDb, 'products')
        try {
            await addDoc(productRef, products);
            getProducts();
            alert ("products added successfully")
            setTimeout (() => {
                window.location.href = '/'
                
            }, 800);
            setProducts("")
            
            
        } catch (error) {
            console.log(error)
        }
    }

    const [allProducts, setAllProucts] = useState([]);

 //* Get Products Function   
    const getProducts = async () => {
        try {
            const q = query (
                collection(fireDb, "products"),
                orderBy("time"),
       );

       const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc)=> {
            productArray.push({...doc.data(), id: doc.id})
            
        })


        setAllProucts(productArray);
       })
         return () => data;

        }catch (error) {
            console.log(error);
            
        }
    }


//* Edit Product Function 
    const editProductHandle = (item) => {
        setProducts(item)
    }
//* edit handle function 
const editProduct = async () => {
    try{

        await setDoc(doc(fireDb, 'products' , products.id ) , products);
        getProducts();
        alert("Product updated successfully")
        setTimeout(()=> {
            window.location.href = '/';
        }, 800)
        setProducts("");

    } catch (error) {
        console.log(error);
        
    }
}

//* Delete Handle Function 
const deleteProduct = async (item) => {
    try {
        await deleteDoc(doc(fireDb, 'products', item.id));
        getProducts();
       alert("products delete successfully")
    } catch(error) {
        console.log(error);
        
    }
}

    useEffect (() => {
   getProducts();
    }, []);



 const [search, setSearch] = useState("")   
  return (
    <MyContext.Provider value={{ products,allProducts, setProducts, addProduct , editProductHandle, editProduct, deleteProduct,search,setSearch}}>
      {prop.children}
    </MyContext.Provider>

  )
}

export default MyState