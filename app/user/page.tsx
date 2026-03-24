import { getServerSession } from "next-auth"

export default async function(){
    const session = await getServerSession() ;
    return <div>
        Server side comp.
        {JSON.stringify(session)}
    </div>
}