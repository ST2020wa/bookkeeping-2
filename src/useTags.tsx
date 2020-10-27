import {useState} from 'react';

const useTags = () => {
    const [tags, setTags] = useState<string[]>(['Cloth', 'Food', 'Housing', 'Transport']);
    return {tags, setTags};
};


export {useTags};
