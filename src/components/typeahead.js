import React from 'react'
import Downshift from 'downshift'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getTypeaheadResults } from '../actions/typeaheadAction'

const StyledLabel = styled.label`
margin-top: 1rem;
display: block;
color: hotpink;
`;
const Input = styled.input`
width: 100%;
padding: 1em;
color: ${props => props.inputColor || "hotpink"};
background: papayawhip;
border: none;
border-radius: 3px;
font-size: medium;
`;

function Typeahead(props) {
    const downshiftOnChange = (selectedCountry) => {
        console.log(selectedCountry)
    }

    const fetchCountries = (query) => {
        props.getTypeaheadResults(query)
    }

    const inputOnChange = (event) => {
        if (!event.target.value) {
            return
        }
        fetchCountries(event.target.value)
    }
    if (props.countries) {
        return (
            <div>
                <Downshift
                    onChange={downshiftOnChange}
                    itemToString={item => (item ? item.name : "")}
                >
                    {({
                        selectedItem,
                        getInputProps,
                        getItemProps,
                        highlightedIndex,
                        isOpen,
                        inputValue,
                        getLabelProps
                    }) => (
                            <div>
                                <StyledLabel {...getLabelProps()}>
                                    Search for your country
                                    </StyledLabel>{" "}
                                <br />
                                <Input
                                    {...getInputProps({
                                        placeholder: "Start typing...",
                                        onChange: inputOnChange
                                    })}
                                />
                                {isOpen ? (
                                    <div>
                                        {
                                            RenderTypeaheadResults(props.countries)
                                                .filter(
                                                    item => !inputValue || item.name
                                                        .toLowerCase()
                                                        .includes(inputValue.toLowerCase())
                                                )
                                                .slice(0, 10)
                                                .map((item, index) => (
                                                    <div
                                                        {...getItemProps({ key: index, index, item })}
                                                        style={{
                                                            backgroundColor:
                                                                highlightedIndex === index ? "#09d3ac" : "#282c34",
                                                            fontWeight: selectedItem === item ? "bold" : "normal"
                                                        }}
                                                    >
                                                        {item.name}
                                                    </div>
                                                ))}
                                    </div>
                                ) : null}
                            </div>
                        )}
                </Downshift>
            </div>
        )
    }
    return null
}

const RenderTypeaheadResults = countries => {
    return countries.map(result => {
        return result.toJS()
    })
}

const mapDispatchToProps = {
    getTypeaheadResults
}

const mapStateToProps = state => ({
    countries: state.typeaheadCountries.get('countries')
})

export default connect(mapStateToProps, mapDispatchToProps)(Typeahead)