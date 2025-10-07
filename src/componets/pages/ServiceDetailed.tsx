import { useParams } from "react-router-dom"

export default function ServiceDetailed() {
    const { id } = useParams();
    return (
        <div className="d-wrapper mx-auto w-2/3">
            <h1>მომსახურების სათაური</h1>
            <p>აღმწერი ინფორმაცია {id}.</p>
        </div>
    )
}