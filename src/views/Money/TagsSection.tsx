import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
background: #FFFFFF; padding: 12px 16px;
flex-grow: 1; display:flex; flex-direction: column;
justify-content: flex-end; align-items: flex-start;
  >ol { margin: 0 -12px;
  > li{
    background: #D9D9D9; border-radius: 18px;
    display:inline-block; padding: 3px 18px;
    font-size: 14px; margin: 8px 6px;
    &.selected{
      background: #696969;
      color:#FFFFFF;
    }
    }
  }
  > button{
    background: none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`;

type Props = {
    value: string[];
    onChange: (selected: string[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
    const [tags, setTags] = useState<string[]>(['cloth', 'food', 'housing', 'transport']);
    const selectedTags = props.value;
    const onAddTag = () => {
        const tagName= window.prompt('new tag name is');
        if(tagName !== null){
            setTags([...tags, tagName])
        }
    };
    const onToggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag);
        if(index >= 0){
            //  如果 tag 已经被选中，就复制所有没有被选中的 tag，作为新的 selectedTag
            props.onChange(selectedTags.filter(t => t !== tag));
        }else{
            props.onChange([...selectedTags, tag])
        }
    };
    const getClass = (tag:string) => selectedTags.indexOf(tag)>= 0 ? 'selected' : ''
    return (
        <Wrapper>
            <ol>
                {tags.map(tag => <li key={tag} onClick={
                    ()=> {onToggleTag(tag);}
                } className={getClass(tag)}>{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>
                create new tag
            </button>
        </Wrapper>
    );
};


export {TagsSection};
