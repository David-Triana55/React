import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"


function Home(){
    const [items , setItems] = useState(null)

    useEffect(()=> {
        const fetchData =  async () => {
            try{
                const res = await fetch('https://api.escuelajs.co/api/v1/products')
                const data =  await res.json()
                console.log(data);
                setItems(data)
            } catch(err) {
                console.error(err);
            }
        }
        fetchData()
    }, [])
    return (
        <Layout>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {
                    items?.map(item=> (
                        <Card
                            key={item.id}
                            data={item}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default Home 