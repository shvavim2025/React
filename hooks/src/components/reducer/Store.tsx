import { FormEvent, useReducer, useRef } from "react"

type Product = {
    id?: number,
    name?: string,
    price?: number,
}

type partProduct = Partial<Product>

type action = {
    type: string,
    data: Product
}

const productReducer = (state: Product[], action: action): Product[] => {
    switch (action.type) {
        case 'ADD':
            return [...state, { ...action.data, id: state.length }];
        case 'REMOVE':
            return [...state].filter((p) => p.id !== action.data.id)
        default:
            return state
    }
}

const Store = () => {
    const [products, productDispatch] = useReducer(productReducer, [] as Product[])
    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        productDispatch({
            type: 'ADD',
            data: {
                name: nameRef.current?.value || '',
                price: +(priceRef.current?.value || '0')
            }
        })
        if (nameRef.current?.value) nameRef.current.value = ''
        if (priceRef.current?.value) priceRef.current.value = ''
    }

    const handleDelete = (id: number) => {
        productDispatch({
            type: 'REMOVE',
            data: { id }
        })
    }

    return (
        <>
            {products.map((p) => <div>
                <h2>{p.name}</h2>
                <h3>{p.price}</h3>
                <button onClick={() => handleDelete(p.id || 0)}>delete</button>
            </div>
            )}
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' id='name' ref={nameRef} />
                <input type='text' id='price' ref={priceRef} />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default Store

