import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from 'hooks/useTags';

const Wrapper = styled.section`
background: #FFFFFF; padding: 12px 16px;
flex-grow: 1; display:flex; flex-direction: column;
justify-content: flex-end; align-items: flex-start;
  >ol { margin: 0 -12px;
  > li{
    background: #D9D9D9; border-radius: 18px;
    display:inline-block; padding: 3px 12px;
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
    value: number[];
    onChange: (selected: number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags, addTag} = useTags()  //  useState
    const selectedTagIds = props.value;

    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if(index >= 0){
            //  如果 tag 已经被选中，就复制所有没有被选中的 tag，作为新的 selectedTag
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        }else{
            props.onChange([...selectedTagIds, tagId])
        }
    };
    const getClass = (tagId:number) => selectedTagIds.indexOf(tagId)>= 0 ? 'selected' : ''
    return (
        <Wrapper>
            <ol>
                {tags.map(tag => <li key={tag.id} onClick={
                    ()=> {onToggleTag(tag.id);}
                } className={getClass(tag.id)}>{tag.name}</li>
                )}
            </ol>
            <button onClick={addTag}>
                create new tag
            </button>
        </Wrapper>
    );
};


export {TagsSection};
