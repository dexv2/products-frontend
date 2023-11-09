import Select from '@/components/select'
import Table from '@/components/table'
import { Fragment } from 'react'

export default function ProductsPage({params}: {params: {name: string}}) {
  return <Fragment>
    <header>
      <Select name={params.name} />
    </header>
    <Table name={params.name} />
  </Fragment>
}
