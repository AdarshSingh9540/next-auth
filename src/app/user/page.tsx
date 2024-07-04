import { getServerSession } from 'next-auth'
import {Appbar} from '../components/Appbar'
import { NEXT_AUTH } from '../api/lib/route';

export default async function(){
    const session = await getServerSession(NEXT_AUTH);
    return<div>
        <Appbar/>
        user components
        {JSON.stringify(session)}
    </div>
} 