import CustomersTable from "@/app/ui/customers/table"
import { fetchFilteredCustomers } from "../../lib/data"
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";


export default async function Page(prop:{searchParams?:Promise<{query?:string}>}){
    const fetchedData= await prop.searchParams;
    const query= fetchedData?.query || ""
    const data =await fetchFilteredCustomers(query)

    return(
        <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
            <CustomersTable  customers={data}/>
        </div>
    )
}