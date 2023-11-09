import axios from "axios"
import companyDetails from "@/static/companyDetails.json"

interface TableProps {
    name: string
}

export default async function Table(props: TableProps) {
    const details = (companyDetails as any)[props.name]
    const { data } = await axios.post('http://localhost:3003/api/products', details)

    return <div className='mt-4 -mb-3'>
        <div className='not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25'>
            <div className='inset-0 bg-grid-slate-100'>
                <div className='relative rounded-xl-overflow-auto'>
                    <div className='shadow-sm overflow-hidden my-8'>
                        <table className='w-4/12 table-auto bg-slate-500 w-full'>
                            <thead>
                                <tr>
                                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-100 text-left'>Name</th>
                                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-100 text-center'>Price</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white dark:bg-slate-800'>
                                {data.products.map((pr: any, i: number) => (
                                    <tr key={i}>
                                        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-left'>{pr.name}</td>
                                        <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 text-center'>{pr.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
