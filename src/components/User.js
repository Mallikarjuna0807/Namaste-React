import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    return <div className="User-componet">
        <h1>count={count}</h1>
        <h1>Name:{name}</h1>
        <h2>Location:Atp</h2>
        <h3>Contact:@Malli0807</h3>
    </div>
}

export default User;