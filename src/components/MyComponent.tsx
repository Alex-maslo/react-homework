import {FC} from 'react';
type MyComponentProps = { text: string };

const MyComponent :FC<MyComponentProps> = ({text}) => {
    return (
        <h2>
            {text}
        </h2>
    );
};

export default MyComponent;