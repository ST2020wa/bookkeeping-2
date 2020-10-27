import {useState} from 'react';

const useTags = () => {
    const [tags, setTags] = useState<string[]>(['cloth', 'food', 'housing', 'transport']);
    return {
        tags,
        setTags
    }
}


export {useTags};
