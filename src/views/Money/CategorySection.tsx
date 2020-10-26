import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background: #C4C4C4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const CategorySection: React.FC = () => {
    const categoryMap = {'-':'outcome', '+':'income'}
    //type X = typeof categoryMap
    //type Y = keyof X
    type Keys = keyof typeof categoryMap
    // type CategoryMap = {'-':string, '+':string}
    const [categoryList] = useState<Keys[]>(['-', '+'])
    const [category, setCategory] = useState('-')  //  + is income; - is outcome
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c =>
                    <li key={c}
                        className={category === c ? 'selected' : ''}
                        onClick={()=>{setCategory(c);}}
                    >{categoryMap[c]}
                    </li>
                )}
            </ul>
        </Wrapper>
    )
}

export {CategorySection};
