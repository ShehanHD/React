import { FC, useState } from 'react';

interface x {
    test: string
}

const Test: FC<x> = (props) => {
    const [data, setData] = useState<Number>(2);
    return (
        <div>
            {props.test}
        </div>
    )
}

export default Test
