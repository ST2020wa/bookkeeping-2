import styled from 'styled-components';
import React from 'react';
// eslint-disable-next-line
import {Link, NavLink} from 'react-router-dom';
import Icon from './icon';

const NavWrapper = styled.nav`
background: #FFFFFF;
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25) ;
> ul {
  display: flex;
  > li{
    width: 33.3333%;
    text-align:center;
    > a {
      display: flex;
      flex-direction: column;
      padding: 4px 0;
      justify-content: center;
      align-items: center;
      .icon {
       width: 24px;
       height: 24px;
      }
      &.selected{
        color: brown;
        .icon{
        fill: brown;
        }
      }
    }
  }
}
`

const Nav = ()=>{
    return (
        <NavWrapper>
                <ul>
                    <li>
                        <NavLink to="/tags" activeClassName="selected">
                            <Icon  name='tag'/>
                            TAG
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/money" activeClassName="selected">
                            <Icon  name='money'/>
                            MONEY
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics" activeClassName="selected">
                            <Icon  name='chart'/>
                            CHART
                        </NavLink>
                    </li>
                </ul>
        </NavWrapper>
    )
}
export default Nav;