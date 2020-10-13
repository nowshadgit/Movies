import React from 'react'
import {InputGroup, FormControl, Dropdown, DropdownButton} from 'react-bootstrap'
import { ALL, EPISODE, MOVIE, SELECT, SERIES } from '../../utils/constants'
import CustomButton from '../CustomButton/CustomButton'
import './SearchInput.scss'

function SearchInput(props){
    let {setSearchStr, searchStr, searchType, setSearchType, submitSearch} = props

    const onSearch =()=>{
        if(searchStr.length > 0 && searchType != SELECT){
          const payload = {searchType:searchType.toLowerCase(), searchStr}
          submitSearch(payload)
        }
    }

    return (
        <div>
          <InputGroup
          >
            <FormControl
              placeholder="Search"
              aria-label="Search"
              value={searchStr}
              onChange={(event)=>setSearchStr(event.target.value)}
            />

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title={searchType}
              id="input-group-dropdown-2"
              onSelect={(e)=>{setSearchType(e)}}
            >
              <Dropdown.Item eventKey={ALL} >{ALL}</Dropdown.Item>
              <Dropdown.Item eventKey={MOVIE} >{MOVIE}</Dropdown.Item>
              <Dropdown.Item eventKey={SERIES} >{SERIES}</Dropdown.Item>
              <Dropdown.Item eventKey={EPISODE} >{EPISODE}</Dropdown.Item>
            </DropdownButton>
            <CustomButton   
              type="button"
              text="Search"
              className="search-btn ml-2"
              id="search-btn"
              submitFunction={onSearch}
          />
          </InputGroup>
          
        </div>

    )
}


export default SearchInput