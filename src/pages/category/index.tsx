import { useParams } from "react-router-dom";

export function Category(){
    const {type, slug} = useParams()


    return <div>
        {type}, {slug}
    </div>

}