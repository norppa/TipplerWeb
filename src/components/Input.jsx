

const Input = (props) => {
    if (props.text) {
        const [value, setter] = props.text
        return <input type='text' value={value} onChange={(event) => setter(event.target.value)} />
    }

    console.error('Input type missing')
    return null
}

export default Input