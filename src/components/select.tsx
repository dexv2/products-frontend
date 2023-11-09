import { redirect } from 'next/navigation'
import { Fragment } from 'react'

interface SelectProps {
    name: string
}

async function handleSubmit(data: FormData) {
    "use server"
    const name = data.get('Company')?.valueOf()
    console.log('child:', data.get('Company')?.valueOf())
    redirect(`/company/${name}`)
}

export default function Select(props: SelectProps) {
    return <Fragment>
        <form action={handleSubmit} className='flex gap-10'>
            <select defaultValue={props.name} className='bg-slate-600 p-1 pl-3 pr-3' name="Company" id="company">
                <option value="kidsWorld">Kids World</option>
                <option value="toyUniverse">Toy Universe</option>
                <option value="toyShop">Toy Shop</option>
            </select>
            <input className='bg-slate-600 p-1 pl-3 pr-3' type="submit" value="Get Products" />
        </form>
    </Fragment>
}
